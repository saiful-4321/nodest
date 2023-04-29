const http = require('http')

// const requestListener = (request, response) => {

// }

const server = http.createServer((request, response) => {
    console.log(request)
})

server.listen(3000)