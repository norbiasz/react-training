import * as constants from '../actions/constants'

const initialState = {
    events: [],
    isLoading: false,
    isError: false,
    filter: '',
    newName: '',
    newNameValid: false,
    newPlace: '',
    newPlaceValid: false,
    newDate: '',
    newDateValid: false,
    newTime: '',
    newTimeValid: false,
}

export const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.CLEAR_EVENTS:
            return {
                ...state,
                events: []
            };
        case constants.DELETE_EVENT:
            return {
                ...state,
                events: state.events.filter(item => item.id !== action.payload.eventId)
            }
        case constants.FILTER_EVENTS:
            return {
                ...state,
                filter: action.payload.eventName
            }
        case constants.FORM_DATA_EVENT:
            const { value, field } = action.payload
            return {
                ...state,
                [field]: value,
                [field + 'Valid']: value.length > 0
            }
        case constants.ADD_EVENT:
            const stateCopy = { ...state }
            const maxId = Math.max(...stateCopy.events.map(item => item.id));
            const { name, place, date, time } = action.payload

            stateCopy.events.push({
                id: maxId + 1,
                name,
                place,
                date,
                time
            })

            return {
                ...state,
                events: stateCopy.events,
                newName: '',
                newPlace: '',
                newDate: '',
                newTime: '',
            }
        case constants.EVENTS_GET_START:
            return { ...state, isLoading: true };
        case constants.EVENTS_GET_SUCCESS:
            return { ...state, isLoading: false, events: action.payload.data };
        case constants.EVENTS_GET_ERROR:
            return { ...state, isLoading: false, isError: true };
        default:
            return state;
    }
}