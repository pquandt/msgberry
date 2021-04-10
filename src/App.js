import Form from "./Form";
import "./css/style.css";
import Status from "./Status";
import DTModifier from "./DTModifier";

function App() {
  return (
    <div className="wrapper" id={DTModifier}>
      <div>
        <Status />
        <DTModifier/>
      </div>
      <div className="container">
       
       
        <div>
          <h1>MESSAGEBERRY</h1>
              <Form />
        </div>

      </div>
    </div>
  );
}

export default App;
