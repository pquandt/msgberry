import React, { useState } from "react";
import OptionComponent from "./OptionComponent";



function Form() {

  const [questionField, setQuestionField] = useState("");
  const [data, setData] = useState({ oText: "Antwort" });



  const addData = (questionFields) => {
    setData({ oText: questionFields });
    console.log(questionField);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(questionField);
  };

  const clearAll = (e) => {
    e.preventDefault();
    setQuestionField("");
    setData({ oText: "Antwort" });
  };




  const addOptionComponent = () => {
    console.log('adding a option component')
    console.log(optionArray)


    const oldOptionsArray = optionArray
    oldOptionsArray.push(createOptionComponent(optionArray.length + 1))
    setOptionArray(oldOptionsArray)
  }



  const removeOptionComponent = () => {
    console.log('removing a option component')

    const lastArray = optionArray

    lastArray.pop()
    setOptionArray(lastArray);


  }



  function createOptionComponent(componentId) {
    return (
      <OptionComponent key={componentId} id={componentId} addOptionComponent={addOptionComponent} removeOptionComponent={removeOptionComponent} />
    )
  }



  const [optionArray, setOptionArray] = useState([createOptionComponent(1)]);


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          className="Question noselect"
          type="text"
          placeholder="Frage"
          name="question"
          value={questionField}
          onChange={(e) => setQuestionField(e.target.value)}
        />
      </div>
      {optionArray.map((singleOptionComponent) => singleOptionComponent)}

      <div>
        <input
          className="answer noselect"
          type="text"
          placeholder="Antwort"
          value={data.oText}
          readOnly
        />
      </div>

      <button type="submit" className="btn noselect">
        Send
      </button>

      <button type="reset" className="btn noselect" onClick={clearAll}>
        Clear
      </button>
    </form>
  );
}

export default Form;
