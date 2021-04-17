import Form from "./main/Form";
import "./css/style.css";
import ConnectionState from "./appconfig/ConnectionState";
import DTModifier from "./appconfig/DTModifier";

import { useTheme } from "./appconfig/ThemeContext";
import { WSDispatchContext, WSReducer, WSReducerActions, WSStateContext } from "./appconfig/socket/WSReducer";
import { useEffect, useReducer, useState } from "react";
import { w3cwebsocket } from "websocket";



function App() {
  const [wsState, wsDispatch] = useReducer(WSReducer, {})
  const [socket, setSocket] = useState(new w3cwebsocket("ws://localhost:4000", "echo-protocol"))



  useEffect(() => {
    console.log('initializing socket')
    socket.onopen = () => {
      console.log('opened WebSocket connection')
      wsDispatch({ type: WSReducerActions.setSocket, payload: socket })
    }
  }, [socket])


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
