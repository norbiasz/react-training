import * as constants from './Constants'
import axios from 'axios';

export function clearEvents() {
    return {
        type: constants.CLEAR_EVENTS
    }
}

export function deleteEvent(eventId) {
    return {
        type: constants.DELETE_EVENT,
        payload: {
            eventId
        }
    }
}

export function filterEvents(eventName) {
    return {
        type: constants.FILTER_EVENTS,
        payload: {
            eventName
        }
    }
}

export function formDataEvent(value, field) {
    return {
        type: constants.FORM_DATA_EVENT,
        payload: {
            value,
            field
        }
    }
}

export function addEvent(name, place, date, time) {
    return {
        type: constants.ADD_EVENT,
        payload: {
            name,
            place,
            date,
            time
        }
    }
}

export function getEventsStart() {
    return {
        type: constants.EVENTS_GET_START
    }
}

export function getEventsSuccess(data) {
    return {
        type: constants.EVENTS_GET_SUCCESS,
        payload: {
            data
        }
    }
}

export function getEventsError(error) {
    return {
        type: constants.EVENTS_GET_ERROR,
        payload: {
            error
        }
    }
}

export function getEvents() {
    return (dispatch) => {
        dispatch(getEventsStart());

        axios.get(`http://frontendinsights.com/events.json`)
            .then(res => dispatch(getEventsSuccess(res.data)))
            .catch(error => dispatch(getEventsError(error)))
    }
}