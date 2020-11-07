import { FETCH_DATA } from "../actions/types";

const resultsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload || false;
    default:
      return state;
  }
};
export default resultsReducer;
