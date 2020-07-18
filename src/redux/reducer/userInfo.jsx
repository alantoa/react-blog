import {SET_USER} from '../actionTypes'

export const userInfo = (state = {}, action) => {
  
  switch (action.type) {
    case SET_USER:
     return  state = action.info
    default:
      return state
  }
}
