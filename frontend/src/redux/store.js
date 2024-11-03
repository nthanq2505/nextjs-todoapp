import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'
import { composeWithDevTools } from 'redux-devtools-extension';

// TODO: Add redux devtools
// TODO: How to use redux devtools?

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = composeWithDevTools(
  applyMiddleware(sagaMiddleware),
)

export const store = createStore(
  rootReducer,
  composeEnhancers
)

sagaMiddleware.run(rootSaga)

export default store