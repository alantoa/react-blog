import {login} from '../../api/login'

import {getToken} from '../../../src/utils/auth'

export default (state, action) => {
  let {form} =  action
  console.log(action);
  switch (action.type) {
    case 'LOGIN_IN':
      return new Promise( (resolve, reject) => {
        login(form).then(res=>{
          state.token = getToken();
          resolve(res)
        }).catch(err=>{
          reject(err)
        })
      })
    case 'LOGIN_OUT':
      console.log('logOut')
      break
    default:
      return state
  }
}
