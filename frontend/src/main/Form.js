import React, { useContext, useState } from "react";
import { WSStateContext } from '../appconfig/socket/WSContextConfig'



function Form() {
  const wsState = useContext(WSStateContext)

  const [questionField, setQuestionField] = useState("");
  const [data, setData] = useState({ oText: "Antwort" });

  const [optionFields, setOptionFields] = useState("");

  const [id, setId] = useState(1);

  const addData = (questionFields) => {
    setData({ oText: questionFields });
    console.log(questionField, { optionFields });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(questionField);
    console.log('emiting a message')
    wsState.socket.close()
  };

  const clearAll = (e) => {
    e.preventDefault();
    setQuestionField("");
    setData({ oText: "Antwort" });
    setOptionFields("");
    setId(1);
  };

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

      <div>
        <button
          className="minus noselect"
          onClick={() => {
            if (id > 1) setId(id - 1);
          }}
        >
          -
        </button>

        <input
          type="text"
          className="Question noselect"
          placeholder={"Option " + id}
          value={optionFields}
          onChange={(e) => setOptionFields(e.target.value)}
        />

        <button className="plus noselect" onClick={() => setId(id + 1)}>
          +
        </button>
      </div>

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
