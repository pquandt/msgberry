import React, { useContext } from "react";
import { WSStateContext } from './socket/WSContextConfig'




export default function ConnectionState() {
  const { online, autoReconnect } = useContext(WSStateContext)
  /* 
    Es gibt nur noch einen state als bool, um die abfrage leichter zu machen
    Dieser ist global über den WSContext gelöst.
  */


  return (
    /* mit dem ternary operator 
    bedingung ? then : else
    können wir leicht in einer Zeile 2 optionen Bereitstellen
    */
    <div className={`${online ? 'onoff' : 'onoffRed'} noselect`}>

      {/* Set Online müssen wir dann auch nicht mehr in eine extra funktion packen. */}
      <p> {online ? 'online' : 'offline'} </p>
      <div>

        <input type="checkbox" name='autoreconnect' checked={autoReconnect} />
        <label for="autoreconnect">Auto Reconnect</label>

      </div>
    </div>
  );
}

