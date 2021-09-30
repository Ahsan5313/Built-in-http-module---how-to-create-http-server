const http = require('http')
const port = 3000

const hostName = '127.0.0.1'

const server = http.createServer((req, res) =>{

    res.end('This is your first server created')
});

server.listen(3000, () =>{

    console.log(`Server is running successfully at http://${hostName}:${port}`)
})