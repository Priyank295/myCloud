const mongoose = require("mongoose");

const dotenv = require("dotenv");

const Schema = mongoose.Schema;

const textSchema = new Schema(
  {
    txt: String,
    title: String,
  },
  {
    collation: "TxtDetails",
  }
);

module.exports = mongoose.model("TxtDetails", textSchema);
