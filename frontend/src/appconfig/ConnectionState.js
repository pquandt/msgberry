import React, { useState } from "react";

export default function ConnectionState() {
  /* 
    Es gibt nur noch einen state als bool, um die abfrage leichter zu machen
    Mittelfristig müssen wir den online State hochshiften in einen Context, um auch aus 
    anderen components drauf zugreifen zu können.
  */
  const [online, setOnline] = useState(false);


  return (
    /* mit dem ternary operator 
    bedingung ? then : else
    können wir leicht in einer Zeile 2 optionen Bereitstellen
    */
    <div className={`${online ? 'onoff' : 'onoffRed'} noselect`}>

      {/* Set Online müssen wir dann auch nicht mehr in eine extra funktion packen. */}
      <p onClick={() => setOnline(!online)}> {online ? 'online' : 'offline'} </p>

    </div>
  );
}

