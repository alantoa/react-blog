export const LoginIn='LOGIN_IN'
export const LoginOut='LOGIN_OUT'

export const LOGIN_IN=(counterCaption)=>({
    type:LoginIn,
    counterCaption
  }
)
export const LOGIN_OUT=(counterCaption)=>({
    type:LoginOut,
    counterCaption
})