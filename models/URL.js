const mongoose = require("mongoose")
require('mongoose-type-url')
const Schema = mongoose.Schema
const URLSchema = new Schema({
  "originalURL": {
    type: mongoose.SchemaTypes.Url,
    required: true,
    unique: true
  },
  "shorterURL": {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model("URL", URLSchema)