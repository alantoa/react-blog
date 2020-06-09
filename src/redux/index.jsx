import {createStore,combineReducers } from 'redux'
import {user} from './reducer/user' 
import {token} from './reducer/token' 
const rootReducer = combineReducers({
    user,
    token
})
const initValue={}
const store=createStore(rootReducer,initValue)

export default store