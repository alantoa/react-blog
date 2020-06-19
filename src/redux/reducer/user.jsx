import {LOGIN_IN} from '../actionTypes'
import {getToken} from '../../../src/utils/auth'
const initValue={
  list: [],
  userTotal: 0,
  name: '',
  username: '',
  roles: null,
  token: getToken(),
  otherList: []
}
export const user = (state = initValue, action) => {
  
  switch (action.type) {
    case LOGIN_IN:
     return  
    default:
      return state
  }
}
