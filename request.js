const request = require('request')

module.exports = (url, json = {}, cb = () => null) => request.post(url, {
  headers: {'Content-Type': 'application/json'},
  json
}, (err, _, body) => {
  if (!err) {
    // try {
    //     body = JSON.parse(body)
    // }catch(ex){
    //     throw new Error("Error ! This server isn't compatible with (this version of) Blast...")
    // }
    if (!body || !body.success || body.success !== true) {
      throw new Error("Error ! This server isn't compatible with (this version of) Blast...")
    }else cb(body)
  }else throw new Error("Error ! This server isn't compatible with (this version of) Blast...")
})
