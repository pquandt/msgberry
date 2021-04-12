import React, { useEffect, useState } from "react";
import Answer from "./Answer";
import { w3cwebsocket } from "websocket";

function Form() {
  const [socket, setSocket] = useState(
    new w3cwebsocket("ws://localhost:4000", "echo-protocol")
  );
  console.log(setSocket);
  useEffect(() => {
    socket.onopen = () => {
      console.log("opened connection");
    };

    socket.onclose = () => {
      console.log("lost connection");
    };
  }, [socket]);

  const [inputFields, setInputFields] = useState([
    { id: 1, Option: "" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields");
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
    
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: 1, Option: " " }]);
    return (
      <button
        className="minus"
        disabled={inputFields.length === 1}
        onClick={() => handleRemoveFields()}
      >
        -
      </button>
    );
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  const resetFields = () => {
    console.log(inputFields.length)
  };

  return (
   
    <form onSubmit={handleSubmit}>
     <div>
      <input
        className="Question"
        type="text"
        placeholder="Frage"
        id="question"
        name="question"
      />
</div>

      {inputFields.map((inputField) => (
     
        <div key={inputField.id}>

        <button
            className="minus"
            disabled={inputFields.length === 1}
            onClick={() => handleRemoveFields(inputField.id)}
          >
            -
          </button>


          <input
            type="text"
            className="Question"
            placeholder={"Option"+inputField.id}
            id="option"
            value={inputField.setInputFields}
            onChange={(event) => handleChangeInput(inputField.id, event)}
          />
           
            <button
            className="plus"
            disabled={inputFields.length === 0}
            onClick={handleAddFields}
          >
            +
          </button>


        </div>
    
    
      ))}
   
     
     
     

      <Answer />

      <button
        type="submit"
        id="send-button"
        className="btn"
        onClick={handleSubmit}
      >
        Send
      </button>
      <button
        type="reset"
        id="clear-button"
        className="btn"
        onClick={resetFields}
      >
        Clear
      </button>
    </form>
  );
}

export default Form;
