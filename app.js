const logger    = require('./logger')
const path      = require('path')

logger("Hello message")
// logger.log("Message")

var pathObj = path.parse(__filename)

console.log(pathObj)