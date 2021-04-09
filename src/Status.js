import React, {useState} from 'react'

function Status() {

    const [status, setStatus] = useState("offline");

    
    return (
        <div>
        <p className="onoff" onClick={() => setStatus("online")}>{status}</p>
      </div>
    )
}


export default Status;