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



  /* Effect loop to initialize socket connection. */
  useEffect(() => {
    const initializeSocket = () => {

      console.log('initialize app socket')
      const newSocket = new w3cwebsocket('ws://localhost:4000')
      newSocket.onopen = () => {
        console.log('opened WebSocket connection')
        wsDispatch({ type: WSReducerActions.setOnline, payload: true })
        wsDispatch({ type: WSReducerActions.setSocket, payload: socketState })
        clearInterval(autoConnectInterval)
        setAutoConnectInterval(undefined)
      }

      newSocket.onclose = () => {
        console.log('closed WebSocket connection')
        wsDispatch({ type: WSReducerActions.setOnline, payload: false })
        if (wsState?.autoReconnect && !autoConnectInterval) {
          setAutoConnectInterval(setInterval(initializeSocket, 5000))
        }
      }

      newSocket.onmessage = (message) => {
        console.log('got a message')
        console.log(message)
      }


      setSocketState(newSocket)
    }
    /* 
      Wenn noch keine socket verbindung besteht, baue eine auf.
    */
    if (!socketState) {
      initializeSocket()
    }

    /* 
      Wenn ein Socket existiert, aber noch nicht im globalen context gesetzt ist, setze es.
    */
    // if (!wsState.socket && socketState) {
    //   wsDispatch({ type: WSReducerActions.setSocket, payload: socketState })
    // }

    /* 
      Wenn die Verbindung vom Socket unterbrochen wurde (socket.readyState === 3)
      und noch kein autoConnect interval gesetzt ist
      und autoReconnect vom user aktiviert wurde
      Setze ein AutoConnectInterval und initialisiere alle 5 Sekunden einen Socket, bis die Verbindung steht.
    */
    // if (wsState?.socket?.readyState === 3 && !autoConnectInterval && wsState?.autoReconnect) {
    // setAutoConnectInterval(setInterval(initializeSocket, 5000))
    // }

    /* 
      Wenn ein Socket initialisiert wurde und noch ein autoConnectInterval steht, lösche das Interval.
    */
    // if (wsState.online && autoConnectInterval && !wsState?.autoReconnect) {
    //   clearInterval(autoConnectInterval)
    //   setAutoConnectInterval(undefined)
    // }


    // if (autoConnectInterval && !wsState?.autoReconnect) {

    //   clearInterval(autoConnectInterval)
    //   setAutoConnectInterval(undefined)
    // }


  }, [socketState, autoConnectInterval, wsState?.autoReconnect])







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
