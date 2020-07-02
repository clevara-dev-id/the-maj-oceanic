import { combineReducers } from 'redux'
import pageReducers from './pageReducers'

const rootReducer = combineReducers({
    occeanic: pageReducers,
})

export default rootReducer