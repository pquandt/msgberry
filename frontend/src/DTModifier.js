import React, { useState } from "react";



function DTModifier() {
  const [theme, setTheme] = useState({ dl: "" });

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
