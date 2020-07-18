import {SET_USER} from '../actionTypes'

export function setUser(info){
    return {
      type:SET_USER,
      info
    }
  }
