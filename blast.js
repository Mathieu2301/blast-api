const rq = require('./request')
const md5 = require('./md5')

const default_options = {
  url: 'https://blast.usp-3.fr/',
  app: 'default',
}

module.exports = function(options) {
  if (!options.url) options.url = default_options.url;
  if (!options.app) options.app = default_options.app;
  if (options.username && options.password) options.app = options.username + options.password

  options.app = md5(options.app)

  const listeners = {}
  let last_id = 0;

  if (options.url.slice(-1) != '/') options.url += '/'

  rq(options.url)

  function poll() {
    rq(options.url + options.app, {
      type: 'poll',
      last_id,
    }, (body) => {
      if (body.changes) {
        body.datas.forEach(data => {
          try {
            data = JSON.parse(data)
            if (listeners[data.event]) listeners[data.event].forEach(fn => fn(...data.args))
          } catch (error) {}
        });
        last_id = body.last_id;
      }
      poll();
    })
  }

  rq(options.url + options.app, {
    type: 'getLastID'
  }, (body) => {
    last_id = body.last_id
    poll();
  })


  this.on = (event, cb) => (listeners[event]) ? listeners[event].push(cb) : listeners[event] = [cb]

  this.emit = (event, ...args) => {
    rq(options.url + options.app, {
      type: 'emit',
      data: JSON.stringify({ event, args })
    }, (body) => last_id = body.last_id)
  }
}
