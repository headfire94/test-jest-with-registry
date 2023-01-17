const client = require('./client').client

client.setTarget({
  sum: (a, b) => a + b
})
