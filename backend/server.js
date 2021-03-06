const WebSocketServer = require('websocket').server;
const http = require('http');
const PORT = 4000


const server = http.createServer((req, res) => {
  console.log('receivec requedsst')
  res.writeHead(200)
  res.end()
})



server.listen(PORT, () => {
  console.log(`${Date.now()} listening on PORT ${PORT}`)
})


const wsServer = new WebSocketServer({

  httpServer: server,
  autoAcceptConnections: false
})


wsServer.on('request', (request) => {
  console.log(`${Date.now()} Connection Established`)
  const connection = request.accept()

  connection.on('message', (message) => {
    console.log('received message', message)
  })


  connection.on('close', () => {
    console.log(`${Date.now()} connection closed`)
  })

})