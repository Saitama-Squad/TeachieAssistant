import { combineReducers } from "redux";
import authReducer from "./authReducers";
import resultsReducer from "./resultsReducers";
import addGoalsReducer from "./addGoalsReducer";
import ytresultsReducer from "./ytresultsReducers";

export default combineReducers({
  auth: authReducer,
  results: resultsReducer,
  goals: addGoalsReducer,
  ytresults: ytresultsReducer,
});
