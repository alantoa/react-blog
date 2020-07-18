import {SET_TOKEN} from '../actionTypes'


export function setToken(token){
    return {
      type:SET_TOKEN,
      token,
    }
  }

