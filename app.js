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
      if (Url) {
        const shorterURL = Url.shorterURL
        res.render("index", { originalURL, shorterURL, localURL: req.headers.origin })
      } else {
        const shorterURL = 'ertws'
        URLModel.create({ originalURL, shorterURL })
        res.render("index", { originalURL, shorterURL, localURL: req.headers.origin })
      }
    })
    .catch(error => console.log(error))

})

app.get("/show/:shorterURL", (req, res) => {
  const { shorterURL } = req.params
  URLModel.findOne({ shorterURL: shorterURL })
    .then(Url => {
      return res.redirect(Url.originalURL)
    })
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})