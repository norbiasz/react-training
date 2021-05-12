import { eventsReducer } from './eventsReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
       eventsStore: eventsReducer
})

export default rootReducer