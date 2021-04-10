import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Status() {
  const [status, setStatus] = useState({id:uuidv4(), mod:"offline"});

const onOff = ()=> {
  if (status.mod === "offline") {
setStatus({mod:"online"})
  }
  else {
    setStatus({mod:"offline"})
  }
}
  

  return (
    <div>
      <p className="onoff" onClick={onOff}>
        {status.mod}
      </p>
    </div>
  );
}

export default Status;
