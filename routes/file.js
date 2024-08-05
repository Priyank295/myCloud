const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const upload = require("../service/multer");
const txtModel = require("../schema/text");
const {
  uploadFile,
  getFiles,
  downloadFiles,
  previewFiles,
} = require("../controllers/fileController");
const fs = require("fs");
const { constants } = require("buffer");

router.post("/upload", upload.single("txt"), async (req, res) =>
  uploadFile(req, res)
);
router.post("/rename", async (req, res) => renameFile(req, res));

router.get("/getFiles", async (req, res) => getFiles(req, res));

router.get("/download/:id", (req, res) => downloadFiles(req, res));

router.get("/preview/:id", async (req, res) => previewFiles(req, res));

module.exports = router;
