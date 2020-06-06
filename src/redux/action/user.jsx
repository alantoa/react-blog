import md5 from 'js-md5'

export const LoginIn='LOGIN_IN'
export const LoginOut='LOGIN_OUT'

export const LOGIN_IN=(form)=>({
    type:LoginIn,
    form:{
      username:form.username,
      password:md5(form.password)
    }
  }
)

export const LOGIN_OUT=(counterCaption)=>({
    type:LoginOut,
    counterCaption
})