import Form from "./main/Form";
import "./css/style.css";
import ConnectionState from "./appconfig/ConnectionState";
import DTModifier from "./appconfig/DTModifier";

import { useTheme } from "./appconfig/ThemeContext";

function App() {
  const darkTheme = useTheme();

  if (darkTheme === true) {
    var dt = "wrapper-d";
  } else {
    dt = "wrapper";
  }

  return (
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
  );
}

export default App;
