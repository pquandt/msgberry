import React from 'react'



/* Type safe reducer funtions */
export const WSReducerActions = Object.freeze({
  example: 'example',
  setSocket: 'setSocket',
  setOnline: 'setOnline',
  setAutoReconnect: 'setAutoReconnect'
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

    case WSReducerActions.setOnline:
      console.log('changing online state to', action.payload)
      return { ...state, online: action.payload }

    case WSReducerActions.setAutoReconnect:
      console.log('setting auto reconnect to', action.payload)
      return { ...state, autoReconnect: action.payload }

    default:
      return state
  }
}
/* Initial Socket Context State */
export const WSInitState = {
  socket: undefined,
  online: undefined,
  autoReconnect: false
}

/* Export WebSocket State Changing functions */
export const WSDispatchContext = React.createContext(WSReducer)
/* Export WebSocket State Context */
export const WSStateContext = React.createContext(WSInitState)