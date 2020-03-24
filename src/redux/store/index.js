import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import loggerMiddleware from  '../middleware/logger'
import rootReducer from '../reducers'

const configureStore = (preloadedState) => {
    const middlewares = [loggerMiddleware, thunk]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer]
    const composedEnhancers = compose(...enhancers)

    const store = createStore(rootReducer, preloadedState, composedEnhancers)
    return store
}

export default configureStore