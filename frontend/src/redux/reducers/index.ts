import { combineReducers } from 'redux'
import taskReducer from './task.reducers'
const rootReducer = combineReducers({
  task: taskReducer
})

export default rootReducer