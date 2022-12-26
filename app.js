const express = require("express")
const exphbs = require("express-handlebars")
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
  const shortenUrl = "ert45"
  res.render("index", { originalUrl: req.body.url, shortenUrl: req.headers.origin + "/" + shortenUrl })
})

app.get("/:shortenUrl", (req, res) => {
  const { shortenUrl } = req.params
  return res.redirect("http://google.com")
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})