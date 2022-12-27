const express = require("express")
const exphbs = require("express-handlebars")
const URLModel = require("./models/URL")
const port = 3000
require("./config/mongoose")

const app = express()
app.engine("hbs", exphbs({ defaultLayout: "main", extname: "hbs" }))
app.set("view engine", "hbs")
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.render("index")
})

app.post("/", (req, res) => {
  if (!req.body.url) {
    return res.redirect("/")
  }
  const originalURL = req.body.url
  URLModel.findOne({ originalURL })
    .lean()
    .then(Url => {
      const shorterURL = () => {
        if (Url) {
          return Url.shorterURL
        } else {
          const shortURL = 'ertws'
          URLModel.create({ originalURL, shorterURL: shortURL })
          return shortURL
        }
      }
      res.render("index", { originalURL, shorterURL, localURL: req.headers.origin })
    })
    .catch(error => {
      console.log(error)
      res.render("error", { 'errmsg': error.message })
    })

})

app.get("/show/:shorterURL", (req, res) => {
  const { shorterURL } = req.params
  URLModel.findOne({ shorterURL })
    .then(Url => {
      return res.redirect(Url.originalURL)
    })
    .catch(error => {
      console.log(error)
      res.render("error", { 'errmsg': error.message })
    })
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})