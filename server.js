// server.js
var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('db.json')
var middlewares = jsonServer.defaults()

const port = process.env.PORT
server.use(middlewares)
server.use(router)
server.listen(port, function () {
  console.log('JSON Server is running')
})