import Form from "./Form"
import "./css/style.css";
import Status from "./Status";
// import DTModifier from "./DTModifier";

function App() {
 

  return (
    <div className="wrapper">
     <div>
     <Status />
  
      </div>
      <div className="container">
        <h1>MESSAGEBERRY</h1>

       <Form/>

	 

      </div>
	
    </div>
  );
}

export default App;
