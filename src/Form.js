import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Answer from "./Answer";

function Form() {
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), Option: "" },
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
    setInputFields([...inputFields, { id: uuidv4(), Option: " " }]);
    return (
      <button
        className="btnminus"
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
    inputFields.length = 2;
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="Question"
        type="text"
        placeholder="Frage"
        id="question"
        name="question"
      />

      {inputFields.map((inputField) => (
        <div key={inputField.id}>
          <input
            type="text"
            className="Question"
            placeholder="Option"
            value={inputField.setInputFields}
            onChange={(event) => handleChangeInput(inputField.id, event)}
          />

          <button
            className="btnminus"
            disabled={inputFields.length === 1}
            onClick={() => handleRemoveFields(inputField.id)}
          >
            -
          </button>

          <button
            className="btnplus"
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
