import { combineReducers } from "redux";
import authReducer from "./authReducers";
import resultsReducer from "./resultsReducers";
import addGoalsReducer from "./addGoalsReducer";

export default combineReducers({
  auth: authReducer,
  results: resultsReducer,
  goals: addGoalsReducer,
});
