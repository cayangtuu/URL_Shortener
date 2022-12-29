const express = require("express")
const router = express.Router()
const URLModel = require("../../models/URL")
const isExistURL = require("../../utils/generateURL")

router.get("/", (req, res) => {
  res.render("index")
})

router.get("/:shorterURL", (req, res) => {
  const { shorterURL } = req.params
  URLModel.findOne({ shorterURL })
    .then(Url => {
      if (Url) {
        return res.redirect(Url.originalURL)
      }
    })
    .catch(error => {
      console.log(error)
      res.render("error", {
        'errtitle': "The URL is not valid !!!",
        'errcont': "Check and confirm the URL is correct."
      })
    })
})

router.post("/", (req, res) => {
  if (!req.body.url) {
    return res.redirect("/")
  }
  const originalURL = req.body.url
  URLModel.findOne({ originalURL })
    .lean()
    .then(Url => {
      if (Url) {
        res.render("index", { originalURL, shorterURL: Url.shorterURL, localURL: req.headers.origin })
      } else {
        isExistURL(0)
          .then(shorterURL => {
            if (shorterURL) {
              URLModel.create({ originalURL, shorterURL })
              res.render("index", { originalURL, shorterURL, localURL: req.headers.origin })
            } else {
              res.render("error", {
                'errtitle': "Connot shorten the URL!!!",
                'errcont': "Check and contact the web manager."
              })
            }
          })
      }
    })
    .catch(error => console.log(error))
})

module.exports = router