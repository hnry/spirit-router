var router = require("./lib/router")
var routes = require("./lib/routes")
var render = require("./lib/render")

var exports = {
  route: routes.verbs
}

exports.route.define = router.define
exports.route.wrap = router.wrap
exports.route.verb = routes.verb

var resource = require("./lib/resource")
exports.route.not_found = exports.route.notFound = resource.not_found
exports.route.resources = resource.resources

module.exports = exports
