import md5 from 'js-md5'
import {LOGIN_IN,SET_TOKEN} from '../actionTypes'


export function setToken(token){
    return {
      type:SET_TOKEN,
      token
    }
  }

export function loginIn(form){
    return {
      type:LOGIN_IN,
      form:{
        username:form.username,
        password:md5(form.password)
      }
    }
  }
