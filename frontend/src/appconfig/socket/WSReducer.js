
/* Type safe reducer funtions */
export const WSReducerActions = Object.freeze({
  example: 'example',
})


/* build the reducer */
export const WSReducer = (state, action) => {
  switch (action.type) {


    case WSReducerActions.example:
      console.log('received example action')
      console.log(action.payload)
      return state







    default:
      return state
  }
}