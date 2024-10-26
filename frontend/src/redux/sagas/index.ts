// redux/sagas/index.js
import { all } from 'redux-saga/effects'
import { watchFetchTask, watchAddTask } from './task.sagas'

export default function* rootSaga () {
  yield all([
    watchAddTask(), 
    watchFetchTask()
  ])
}
