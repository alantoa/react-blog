import {SET_USER} from '../actionTypes'

export const user = (state = {}, action) => {
  
  switch (action.type) {
    case SET_USER:
     return  state = action.info
    default:
      return state
  }
}
