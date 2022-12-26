const mongoose = require("mongoose")
const Schema = mongoose.Schema
const URLSchema = new Schema({
  "originalURL": {
    type: mongoose.SchemaTypes.Url, required: true
  },
  "shortenURL": {
    type: Url, required: true
  }
})

module.exports = mongoose.model("URL", URLSchema)