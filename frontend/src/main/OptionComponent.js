import React, { useState } from 'react'

export default function OptionComponent({ id, addOptionComponent, removeOptionComponent }) {

  const [text, setText] = useState("");
  return (
    <div>
      {
        id === 1
          ? null
          : <button
            className="minus noselect"
            onClick={removeOptionComponent}
          >
            -
            </button>
      }



      <input
        type="text"
        className="Question noselect"
        placeholder={"Option " + id}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className="plus noselect" onClick={addOptionComponent}>
        +
      </button>

    </div>
  )
}

