import { detailsReducer } from './DetailsReducer'
import { eventsReducer } from './EventsReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    detailsStore: detailsReducer,
    eventsStore: eventsReducer
})

export default rootReducer