import { ADD_GOALS } from "../actions/types";

const authReducer = (state = null, action) => {
  switch (action.type) {
    case ADD_GOALS:
      return action.payload || false;
    default:
      return state;
  }
};
export default authReducer;
