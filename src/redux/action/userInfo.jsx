import {SET_USER_INFO} from '../actionTypes'

export function setUserInfo(info){
    return {
      type:SET_USER_INFO,
      info
    }
  }
