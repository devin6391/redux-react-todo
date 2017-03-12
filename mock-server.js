var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('./mock-data/mock-db.json')
var middlewares = jsonServer.defaults()
var customRoutes = require("./mock-data/mock-routes.js")

router.render = function (req, res) {
  res.jsonp({
    respnseCode: 200,
    body: res.locals.data
  })
}

// server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', function (req, res) {
  res.jsonp(req.query)
})

// server.use(function (req, res, next) {
//  if (isAuthorized(req)) { // add your authorization logic here
//    next() // continue to JSON Server router
//  } else {
//    res.sendStatus(401)
//  }
// })

// server.use(jsonServer.rewriter(customRoutes));

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use(function (req, res, next) {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  res.header('Access-Control-Allow-Origin', '*');
  // Continue to JSON Server router
  next()
})

// Use default router
server.use(router)
server.listen(3001, function () {
  console.log('JSON Server is running')
})
