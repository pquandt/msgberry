const WebSocketServer = require('websocket').server;
const http = require('http');
const PORT = 4000


const server = http.createServer((req, res) => {
  console.log('receivec requedsst')
  res.writeHead(200)
  res.end()
})



server.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`)
})


const wsServer = new WebSocketServer({

  httpServer: server,
  autoAcceptConnections: false
})


wsServer.on('request', (request) => {
  console.log('Connection Established')
  const connection = request.accept('echo-protocol', request.origin)

  connection.on('message', (message) => {
    console.log('received message', message)
  })


  connection.on('close', () => {
    console.log('connection closed')
  })

})