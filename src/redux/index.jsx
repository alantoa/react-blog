import {createStore,combineReducers } from 'redux'
import {user} from './reducer/user' 
import {token} from './reducer/token' 
import {swiper} from './reducer/swiper' 


const rootReducer = combineReducers({
    user,
    token,
    swiper
})
const initValue={}
const store=createStore(rootReducer,initValue)

export default store