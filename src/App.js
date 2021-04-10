import Form from "./Form"
import ".css/style.css";
import Status from "./Status";

function App() {
 

  return (
    <div className="wrapper">
      <Status />
      <div className="container">
        <h1>MESSAGEBERRY</h1>

       <Form/>

	 

      </div>
	
    </div>
  );
}

export default App;
