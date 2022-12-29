const URLModel = require("../models/URL")

function isExistURL(num) {
  const shorterURL = generateURL(5)
  return URLModel.findOne({ shorterURL })
    .then(Url => {
      while (Url) {
        num += 1
        if (num < 3) {
          return isExistURL(num)
        } else {
          return
        }
      }
      return shorterURL
    })
    .catch(error => console.log(error))
}

function generateURL(num) {
  const Characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let shortURL = ''
  for (let i = 0; i < num; i++) {
    const index = Math.floor(Math.random() * Characters.length)
    shortURL += Characters.charAt(index)
  }
  return shortURL
}

module.exports = isExistURL
