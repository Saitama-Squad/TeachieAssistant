import axios from "axios";
import history from "../history";
import { FETCH_USER, FETCH_DATA, ADD_GOALS } from "./types.js";

export const fetchUser = () => async (dispatch) => {
  const response = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const fetchData = (term) => async (dispatch) => {
  // history.push("/home/loading");
  try {
    let tt = term;
    console.log("term: " + term);
    const response = await axios.get(`/results/${term}`);
    console.log(response);
    dispatch({
      type: FETCH_DATA,
      payload: response.data,
    });
    console.log("history: " + tt);
    console.log(response.data[0]);
    history.push(`/home/${tt}`);
  } catch (error) {
    dispatch({
      type: "ERROR",
      payload: null,
    });
    history.push("/eRrOrXxX");
  }
};

export const addGoals = (term, id) => async (dispatch) => {
  try {
    let tt = term;
    console.log("addgoal: " + term);
    const response = await axios.put(`/addgoals/${term}/${id}`);
    console.log("goals: " + response);
    dispatch({
      type: ADD_GOALS,
      payload: response.data,
    });
    console.log("history: " + tt);
    console.log("goals data: " + response.data);
    history.push(`/home/${tt}`);
  } catch (error) {
    dispatch({
      type: "ERROR",
      payload: null,
    });
    history.push("/eRrOrXxX");
  }
};
