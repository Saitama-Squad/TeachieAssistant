import axios from "axios";
import { FETCH_USER, FETCH_DATA } from "./types.js";

export const fetchUser = () => async (dispatch) => {
  const response = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const fetchData = (term) => async (dispatch) => {
  try {
    const response = await axios.get(`/results/${term}`);
    console.log(response);
    dispatch({
      type: FETCH_DATA,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "ERROR",
      payload: null,
    });
  }
};
