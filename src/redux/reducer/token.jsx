
import {SET_TOKEN} from '../actionTypes'

const initValue={
  token:''
}
export const token = (state = initValue, action) => {
  switch (action.type) {
    case SET_TOKEN:
     return state.token = action.token
    default:
      return state
  }
}
