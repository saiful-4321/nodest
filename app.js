const logger    = require('./logger')
const path      = require('path')
const os        = require('os')

logger("Hello message")
// logger.log("Message")

// Path Object
var pathObj = path.parse(__filename)
console.log(pathObj)

// OS Module example
let totalMemory = os.totalmem()
let freeMemory = os.freemem()
console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)