const multer = require("multer");
const conn = require("./db");
const GridFsStorage = require("multer-gridfs-storage").GridFsStorage;
const Grid = require("gridfs-stream");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
let gfs;
conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

const storage = new GridFsStorage({
  url: process.env.MONGO_URI,
  file: (req, file) => {
    return {
      bucketName: "uploads", // collection name
      filename: `${Date.now()}-${file.originalname}`,
    };
  },
});
module.exports = multer({ storage: storage });
