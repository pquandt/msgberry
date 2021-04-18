import Form from "./main/Form";
import "./css/style.css";
import ConnectionState from "./appconfig/ConnectionState";
import DTModifier from "./appconfig/DTModifier";

import { useTheme } from "./appconfig/ThemeContext";
import { WSDispatchContext, WSInitState, WSReducer, WSReducerActions, WSStateContext } from "./appconfig/socket/WSContextConfig";
import { useEffect, useReducer, useState } from "react";
import { w3cwebsocket } from "websocket";



function App() {
  const [wsState, wsDispatch] = useReducer(WSReducer, WSInitState)
  const [socketState, setSocketState] = useState(undefined)
  const [autoConnectInterval, setAutoConnectInterval] = useState(undefined)


  /* Effect loop to initialize socket connection. Could be outsourced to external functions */
  useEffect(() => {

    if (!socketState) {
      console.log('initialize app socket')
      const newSocket = new w3cwebsocket('ws://localhost:4000', 'echo-protocol')
      newSocket.onopen = () => {
        console.log('opened WebSocket connection')
        wsDispatch({ type: WSReducerActions.setOnline, payload: true })
        /* TODO set connection state to online */
      }

      newSocket.onclose = () => {
        console.log('closed WebSocket connection')
        wsDispatch({ type: WSReducerActions.setOnline, payload: false })
        /* TODO set connection state to offline */
      }
      setSocketState(newSocket)
    }

    if (!wsState.socket && socketState) {
      console.log('setting global context socket')
      wsDispatch({ type: WSReducerActions.setSocket, payload: socketState })
    }

    if (wsState?.socket?.readyState === 3 && !autoConnectInterval && wsState?.autoReconnect) {
      console.log('must manually reconnect')
      setAutoConnectInterval(setInterval(() => {
        console.log('connect from internal interval')

        const newSocket = new w3cwebsocket('ws://localhost:4000', 'echo-protocol')
        newSocket.onopen = () => {
          console.log('opened WebSocket connection')
          wsDispatch({ type: WSReducerActions.setOnline, payload: true })
          /* TODO set connection state to online */
        }

        newSocket.onclose = () => {
          console.log('closed WebSocket connection')
          wsDispatch({ type: WSReducerActions.setOnline, payload: false })
          /* TODO set connection state to offline */
        }
        setSocketState(newSocket)
      }, 5000))
    }

    if (wsState.online && autoConnectInterval) {
      console.log('Clearing autoconnect interval due online state')
      clearInterval(autoConnectInterval)
    }


  }, [autoConnectInterval, socketState, wsState?.autoReconnect, wsState.online, wsState.socket])







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
