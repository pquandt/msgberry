import { w3cwebsocket } from "websocket";




// socket.onopen = () => {
//   console.log("opened connection");
// };


// socket.onclose = () => {
//   console.log("lost connection");
// };



export const sendMessage = () => {
  console.log('seindng from ws module')
  const socket = new w3cwebsocket("ws://localhost:4000", "echo-protocol")
  socket.onmessage = (msg) => {
    console.log('received FE message')
    console.log(msg)
  }
}


