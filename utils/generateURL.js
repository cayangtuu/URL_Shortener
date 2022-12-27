function generateURL(num) {
  const Characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let shortURL = ''
  for (let i = 0; i < num; i++) {
    const index = Math.floor(Math.random() * Characters.length)
    shortURL += Characters.split('')[index]
  }
  return shortURL
}
module.exports = generateURL
