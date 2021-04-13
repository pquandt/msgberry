import React from "react";
import {useThemeUpdate} from "./ThemeContext"


function DTModifier() {
 
  const toggleTheme = useThemeUpdate()


  return (
    
    <div>
      <p className="dtmode" onClick={toggleTheme}>
        ☀🌜
      </p>
    </div>
  );
}


export default DTModifier;
