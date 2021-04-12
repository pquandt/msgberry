import Form from "./Form";
import "./css/style.css";
import Status from "./Status";
import DTModifier from "./DTModifier";

function App() {
  return (
    <div className="wrapper">
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
