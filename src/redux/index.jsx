import {createStore,combineReducers } from 'redux'
import {user} from './reducer/user' 
const rootReducer = combineReducers({
    user
})
const initValue={}
const store=createStore(rootReducer,initValue)

export default store