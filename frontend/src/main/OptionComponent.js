import React, { useEffect, useState } from 'react'

export default function OptionComponent({ id, addOptionComponent, removeOptionComponent }) {

  useEffect(() => {
    // console.log(props)
  }, [])

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



/*

State
text &&&
id &&&
first: boolean
last: boolean



[OptionComponents]


{
  1: {
    component: OptionComponent
  },
  2: {
    component: OptionComponent
  }
}


*/