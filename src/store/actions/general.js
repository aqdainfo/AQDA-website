import * as ActionTypes from '../constants';

export const setLoaded = () => dispatch => {
  dispatch({
    type: ActionTypes.GENERAL_SET_LOADED,
    payload: true
  })
}