import axios from "axios";
import { FETCH_USER, FETCH_DATA } from "./types.js";

export const fetchUser = () => async (dispatch) => {
  const response = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const fetchData = (term) => async (dispatch) => {
  const response = await axios.get("/home/results");
  console.log(response);
  dispatch({ type: FETCH_DATA, payload: response.data });
  try {
    const response = await axios.get(`/home/results`, {
      q: {
        word: term,
      },
    });
    console.log(response);
    dispatch({
      type: "DATA_OF_WORD",
      payload: response.data.results[0].lexicalEntries,
    });
  } catch (error) {
    dispatch({
      type: "ERROR",
      payload: null,
    });
  }
};
