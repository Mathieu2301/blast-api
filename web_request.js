module.exports = (url, json = {}, cb = () => null) => {
  const xhr = new XMLHttpRequest()
  xhr.open('POST', url, true)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      let body = JSON.parse(xhr.responseText)
      if (!body || !body.success || body.success !== true) {
        throw new Error("Error ! This server isn't compatible with (this version of) Blast...")
      }else cb(body)
    }
  }
  xhr.send(JSON.stringify(json))
}
