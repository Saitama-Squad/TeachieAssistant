import { combineReducers } from "redux";
import authReducer from "./authReducers";
import resultsReducer from "./resultsReducers";

export default combineReducers({
  auth: authReducer,
  results: resultsReducer,
});
