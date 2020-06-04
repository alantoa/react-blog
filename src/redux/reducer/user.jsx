import { LOGIN_IN, LOGIN_OUT } from '../login'
export default (state, action) => {
  console.log(action)
  switch (action.type) {
    case LOGIN_IN:
      console.log('logIn')
      break
    case LOGIN_OUT:
      console.log('logOut')
      break
    default:
      return state
  }
}
