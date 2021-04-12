import React, { useState } from "react";

function Status() {
  const [status, setStatus] = useState({ cN:"onoff", mod: "online" });


  const onOff = () => {
    if (status.mod === "offline") {
      setStatus({ cN:"onoff", mod: "online" });
    } else {
      setStatus({ cN:"onoffRed", mod: "offline" });
    }
  };

  return (
    <div className={status.cN}>
      <p  onClick={onOff}>
        {status.mod}
      </p>
    </div>
  );
}

export default Status;
