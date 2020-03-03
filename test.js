const Blast = require('./blast')

const client = new Blast({
  username: 'username_test',
  password: 'password_test',
})

client.on('test', (...data) => {
  console.log(...data)
})

client.emit('test', "It works") // "It Works"

client.emit('test', "It works", "OMG") // "It Works OMG"

client.emit('test', { // Object {message: "It works", reaction: "OMG"}
  message: "It works",
  reaction: "OMG"
})
