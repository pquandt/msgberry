import Form from "./Form";
import "./css/style.css";
import Status from "./Status";
import DTModifier from "./DTModifier";

import {useTheme} from "./ThemeContext"

function App() {
  const darkTheme=useTheme()
 
  if (darkTheme === true) {
    var dt ="wrapper-d"
  }else {dt="wrapper"}

  return (

    <div className={dt}>
      <div className="topbar">
        <Status />
        <DTModifier/>
      </div>
      <div className="container">
       
       
        <div>
          <h1>MESSAGEBERRY</h1>
             
        </div>
        <div className="form">
        <Form />
        </div>

      </div>
    </div>
 
  );
}

export default App;
