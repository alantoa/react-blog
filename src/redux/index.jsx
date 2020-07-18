import {createStore,combineReducers } from 'redux'
import {user} from './reducer/user' 
import {swiper} from './reducer/swiper' 


const rootReducer = combineReducers({
    user,
    swiper
})
const initValue={}
const store=createStore(rootReducer,initValue)

export default store