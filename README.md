# Blast API
 Allows you to use global 'serverless' events in JavaScript (Node or Web)

## Installation

```
npm i blast-api
```

## Examples (Projects using Blast)
- [MiBand Chat](https://github.com/Mathieu2301/miband-chat/)

## Use 
(Check ``test.js`` file)


### First, import Blast lib

```javascript
const Blast = require('./blast')
```

### Then, init the client

Using an username and a password OR just an unique app token :
```javascript
const client = new Blast({
  username: 'username_test', // as you want
  password: 'password_test', // as you want
  // OR
  app: 'XXXXXXXXXXXXXX', // as you want
  
  url: 'https://your-blast-server/', // (Optional) Default server is mine
})
```

### Listen to an event

```javascript
client.on('test', (...data) => {
  console.log(...data)
})
```

### Emit examples

```javascript
client.emit('test', "It works") // => "It Works"

client.emit('test', "It works", "OMG") // => "It Works OMG"

client.emit('test', {
  message: "It works",
  reaction: "OMG"
}) // => Object {message: "It works", reaction: "OMG"}
```
___
## Problems

 If you have errors in console or unwanted behavior please create an issue [here](https://github.com/Mathieu2301/blast-api/issues).
