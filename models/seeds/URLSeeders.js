const mongoose = require("mongoose")
const db = require("../../config/mongoose")
const URLList = require("../../URL.json").results
const URLModel = require("../URL")

db.once("open", () => {
  URLModel.insertMany(URLList)
    .then(() => console.log("URL Data Insert Successfully!"))
    .catch((error) => console.log(error))
})