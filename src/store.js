import reducer from './reducer'
import ReduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f

const store = createStore(reducer, enhancer)

const enhancer = compose (
    applyMiddleware (ReduxThunk),
    devTools 
)

export default store
