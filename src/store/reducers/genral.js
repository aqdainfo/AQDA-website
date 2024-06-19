import * as ActionTypes from '../constants';

const initState = {
  loaded: false,
  interviewID: 1,
  filter: {},
}

const generalReducer = (state = initState, action) => {
  const payload = action.payload;

  switch(action.type) {
    case ActionTypes.GENERAL_SET_INTERVIEW_ID:
      return {
        ...state,
        interviewID: payload.interviewID
      }

    case ActionTypes.GENERAL_SET_LOADED:
      return {
        ...state,
        loaded: payload
      }
    
    default:
      return state;
  }
}

export default generalReducer;