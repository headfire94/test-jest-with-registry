const client = require('./client').client

const doMath = () => {
  const a = 5
  const b = 5

  return client.sum(a, b)
}

module.exports = {
  doMath
}
