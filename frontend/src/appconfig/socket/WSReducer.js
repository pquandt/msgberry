import React from 'react'



/* Type safe reducer funtions */
export const WSReducerActions = Object.freeze({
  example: 'example',
  setSocket: 'setSocket',
})


/* build the reducer */
export const WSReducer = (state, action) => {
  switch (action.type) {


    case WSReducerActions.example:
      console.log('received example action')
      console.log(action.payload)
      return state


    case WSReducerActions.setSocket:
      console.log('received setSocket action')
      return { ...state, socket: action.payload }




    default:
      return state
  }
}



export const WSDispatchContext = React.createContext(WSReducer)
export const WSStateContext = React.createContext({})