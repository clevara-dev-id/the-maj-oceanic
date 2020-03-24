import { combineReducers } from 'redux'
import pageReducers from './pageReducers'

const rootReducer = combineReducers({
    page: pageReducers,
})

export default rootReducer