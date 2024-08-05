const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const upload = require("../service/multer");
const GridFsStorage = require("multer-gridfs-storage").GridFsStorage;
const Grid = require("gridfs-stream");
const txtModel = require("../schema/text");
const conn = require("../service/db");
const { MongoClient, GridFSBucket } = require("mongodb");

// const gfsBucket = new GridFSBucket(conn.db, { bucketName: "uploads" });

let gfs;
conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

exports.uploadFile = async (req, res) => {
  const filename = req.file.filename;
  console.log(filename);
  try {
    const newtxt = new txtModel({
      //   title: ,
      txt: filename,
    });

    await newtxt.save();
    res.json({ status: "Upload Success" });
  } catch (error) {
    res.json({ status: "Upload Failed" });
  }
};

exports.getFiles = async (req, res) => {
  //   console.log("getFiles");
  try {
    let files = await gfs.files.find().toArray();
    res.json({ files });
  } catch (err) {
    res.json({ err });
  }
};

exports.downloadFiles = async (req, res) => {
  try {
    console.log(req.params.id);
    const newfile = await gfs.files.findOne({
      _id: mongoose.Types.ObjectId(req.params.id),
    });

    if (!newfile) {
      res.json({ msg: "File not found" });
    }
    console.log(newfile);
  } catch (error) {
    res.json({ status: error });
  }
};

exports.previewFiles = async (req, res) => {
  try {
    // console.log("HI DUDE");
    const file = await gfs.files.findOne({
      _id: new mongoose.Types.ObjectId(req.params.id),
    });
    // console.log(file);

    if (!file) {
      return res.status(404).json({ msg: "File not found" });
    }

    if (file.contentType !== "text/plain") {
      return res.status(400).json({ msg: "Not a text file" });
    }

    // console.log(file.filename);
    var readstream = gfs.createReadStream(file.filename);

    console.log(readstream);

    let data = "HEllo";
    readstream.on("data", (chunk) => {
      data += chunk;
    });

    // console.log(data);

    readstream.on("end", () => {
      res.send(data);
    });
    readstream.pipe(res);
    readstream.on("error", (err) => {
      res.status(500).json({ msg: "Error reading file" });
    });
  } catch (error) {
    res.status(500).json({ msg: "Error" });
  }
};
