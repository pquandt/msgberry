import React, { useEffect, useState } from "react";
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
  // const [optionCompCounterId, setOptionCompCounterId] = useState(optionArray.length);
  /* 
    [
      <OptionComponent id setId />
      <OptionComponent id setId />
      <OptionComponent id setId />
      <OptionComponent id setId />
    ]
  
  
  */

  // useEffect(() => {
  //   setOptionArray((oldOptionArray) => {
  //     return [...oldOptionArray, createOptionComponent(optionCompCounterId)]
  //   })
  // }, [optionCompCounterId])





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


      {/* 
      
      optionArray 
      [
        OptionComponent,
        OptionComponent,
        OptionComponent
      ]

      [
        {
          id: 1,
          text: "",
          first: false,
          last: false
        },{
          id: 1,
          text: "",
          first: false,
          last: false
        }
        ...
      ]
      
      
      
      */}

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
