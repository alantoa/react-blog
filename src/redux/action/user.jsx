import md5 from 'js-md5'
import {LOGIN_IN} from '../actionTypes'

export function loginIn(form){
    return {
      type:LOGIN_IN,
      form:{
        username:form.username,
        password:md5(form.password)
      }
    }
  }
