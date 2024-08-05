const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const bodyParser = require("body-parser");
const cors = require("cors");
const upload = require("./service/multer");

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", require("./routes/file"));

// app.post("/upload/single", upload.single("img"), (req, res) => {
//   console.log(req.file);
//   return res.send("Single file");
// });

app.listen(3000);
