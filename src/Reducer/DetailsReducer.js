import * as constants from './../Actions/Constants'

const initialState = {
  events: [],
  event: {},
  shouldUpdate: false,
  isLoading: false,
  isError: false
}

export const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.DETAILS_FIND:
      const eventId = action.payload.eventId;
      const event = state.events.find(item => item.id === parseInt(eventId, 10));
      return { ...state, event, shouldUpdate: false };
    case constants.DETAILS_GET_START:
      return { ...state, isLoading: true };
    case constants.DETAILS_GET_SUCCESS:
      return { ...state, isLoading: false, shouldUpdate: true, events: action.payload.data };
    case constants.DETAILS_GET_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
}
