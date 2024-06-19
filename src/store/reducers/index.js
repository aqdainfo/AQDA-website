import { combineReducers } from "redux";

import interviewReducer from './interviews';
import generalReducer from "./genral";

export default combineReducers({
  interviews: interviewReducer,
  general: generalReducer
});