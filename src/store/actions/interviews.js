import * as ActionTypes from '../constants';
import DataApis from '../../utils/rest';
// import data from '../../apiData';

export const getInterviews = () => async dispatch => {
  const data = await DataApis.getAllInterview();
  
  dispatch({
    type: ActionTypes.GET_INTERVIEWS,
    payload: data
  });

  dispatch({
    type: ActionTypes.GENERAL_SET_LOADED,
    payload: true
  })
}

// export const getInterviews = () => dispatch => {
  
//   dispatch({
//     type: ActionTypes.GET_INTERVIEWS,
//     payload: data
//   });

//   dispatch({
//     type: ActionTypes.GENERAL_SET_LOADED,
//     payload: true
//   })
// }

export const getFilteredData = (searchKey, type, key, checked) => dispatch => {  
  dispatch({
    type: ActionTypes.GET_FILTERED_DATA,
    payload: {type, key, checked: !checked, searchKey}
  });
}

export const resetFilter = () => dispatch => {
  dispatch({
    type: ActionTypes.RESET_FILTER,
  })
}