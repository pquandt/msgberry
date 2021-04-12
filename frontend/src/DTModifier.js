import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";


function DTModifier() {
  const [theme, setTheme] = useState({ id: uuidv4(), dl: "" });

  const daynight = ()=> {
    if (theme.dl === "") {
      setTheme({ dl: "-d" });
    } else {
      setTheme({ dl: "" });
    }
    return theme
  };

  console.log(theme.dl);
  return (
    
    <div>
      <p className="dtmode" onClick={daynight}>
        ☀🌜
      </p>
    </div>
  );
}


export default DTModifier;