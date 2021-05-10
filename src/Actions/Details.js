import * as constants from './Constants'
import axios from 'axios';

export function findEvent(eventId) {
  return {
    type: constants.DETAILS_FIND,
    payload: {
      eventId
    }
  }
}

export function getEventsStart() {
  return {
    type: constants.DETAILS_GET_START
  }
}

export function getEventsSuccess(data) {
  return {
    type: constants.DETAILS_GET_SUCCESS,
    payload: {
      data
    }
  }
}

export function getEventsError(error) {
  return {
    type: constants.DETAILS_GET_ERROR,
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