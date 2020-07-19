import {SET_USER} from '../actionTypes'
import { SET_USER_INFO } from "../actionTypes";

export const user = (state = {}, action) => {
  
  switch (action.type) {
    case SET_USER:
     return  state = action.info
    case SET_USER_INFO :
      return state = action.info
    default:
      return state
  }
}
