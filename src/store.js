// Redux
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// Reducers
import todos from './state/todos'
import auth, { initAuthUserSync } from './state/auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = combineReducers({
  // Shorter syntax for counter: counter
  todos,
  auth
})

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  ),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store

store.dispatch(initAuthUserSync())
