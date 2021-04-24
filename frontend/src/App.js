import Form from "./main/Form";
import "./css/style.css";
import ConnectionState from "./appconfig/ConnectionState";
import DTModifier from "./appconfig/DTModifier";

import { useTheme } from "./appconfig/ThemeContext";
import { WSDispatchContext, WSInitState, WSReducer, WSReducerActions, WSStateContext } from "./appconfig/socket/WSContextConfig";
import { useEffect, useReducer } from "react";
import { w3cwebsocket } from "websocket";



function App() {
  const [wsState, wsDispatch] = useReducer(WSReducer, WSInitState)



  /* Effect loop to initialize socket connection. */
  useEffect(() => {
    const initializeSocket = () => {


      console.log('initializing socket')
      const newSocket = new w3cwebsocket('ws://localhost:4000')

      newSocket.onopen = () => {
        console.log('opened WebSocket connection')
        wsDispatch({ type: WSReducerActions.setOnline, payload: true })
      }

      newSocket.onclose = () => {
        console.log('closed WebSocket connection')
        wsDispatch({ type: WSReducerActions.setOnline, payload: false })
        setTimeout(() => {
          wsDispatch({ type: WSReducerActions.setSocket, payload: undefined })
        }, 5000);
      }

      newSocket.onmessage = (message) => {
        console.log('Got a Message from WS Server:')
        console.log(message)
      }

      wsDispatch({ type: WSReducerActions.setSocket, payload: newSocket })
    }
    /* 
      Wenn noch keine socket verbindung besteht und autoReconnect aktiviert ist, baue eine auf.
    */
    if (!wsState.socket && wsState.autoReconnect) {
      initializeSocket()
    }


  }, [wsState.socket, wsState.autoReconnect])







  const darkTheme = useTheme();

  if (darkTheme === true) {
    var dt = "wrapper-d";
  } else {
    dt = "wrapper";
  }

  return (
    <WSDispatchContext.Provider value={wsDispatch}>
      <WSStateContext.Provider value={wsState}>

        <div className={dt}>
          <div className="topbar">
            <ConnectionState />
            <DTModifier />
          </div>
          <div className="container">
            <div>
              <h1 className="noselect">MESSAGEBERRY</h1>
            </div>
            <div className="form">
              <Form />
            </div>
          </div>
        </div>
      </WSStateContext.Provider>
    </WSDispatchContext.Provider>
  );
}

export default App;
