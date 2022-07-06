import { FETCH_DATA_YT } from "../actions/types";

const ytresultsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DATA_YT:
      return action.payload || false;
    default:
      return state;
  }
};
export default ytresultsReducer;