import {createStore} from 'redux'
import reducer from './reducer/user' 
const initValue={
    user:{},
    token:''
}
const store=createStore(reducer,initValue)
export default store