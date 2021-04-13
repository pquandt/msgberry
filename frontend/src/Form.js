import React, { useEffect, useState } from "react";


// import { w3cwebsocket } from "websocket";

function Form() {
  // const [socket, setSocket] = useState(
  //   new w3cwebsocket("ws://localhost:4000", "echo-protocol")
  // );
  // console.log(setSocket);
  // useEffect(() => {
  //   socket.onopen = () => {
  //     console.log("opened connection");
  //   };

  //   socket.onclose = () => {
  //     console.log("lost connection");
  //   };
  // }, [socket]);
  

  const [inputFields, setInputFields] = useState("");
  const [data, setData] = useState ({oText:"Antwort"})

  const [optionField, setOptionField] = useState("");


  const addData= (inputFields)=>{
  setData({oText:inputFields})
console.log (inputFields, {optionField})
}

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(inputFields);
  };
 

  const clearAll = (e) => {
    e.preventDefault();
    setInputFields("")
    setData ({oText:"Antwort"})
    setOptionField ("")
  }
  
 
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          className="Question"
          type="text"
          placeholder="Frage"
          name="question"
          value={inputFields}
          onChange={(e) => setInputFields(e.target.value)}
        />
      </div>

      <div>
        <button className="minus">-</button>

        <input
          type="text"
          className="Question"
          placeholder={"Option"}
          value={optionField}
          onChange={(e) => setOptionField(e.target.value)}
        />

        <button className="plus">+</button>
      </div>

      <div> 
		  <input className="answer" type="text" value={data.oText} readOnly />
		  </div>

      <button
        type="submit"
        className="btn"
    
      >
        Send
      </button>
      <button type="reset" className="btn" onClick={clearAll}>
        Clear
      </button>
    </form>
  );
}

export default Form;
