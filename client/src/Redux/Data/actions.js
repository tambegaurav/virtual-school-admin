import axios from "axios";
import {
  FETCH_DATA_SUCCESS,
  DELETE_POST,
  CREATE_LECTURE_SUCCESS,
} from "./actionTypes";

const API = axios.create({ baseURL: "https://educationgt.herokuapp.com" });

export const fetchPostSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

export const createPostSuccess = (data) => {
  return {
    type: CREATE_LECTURE_SUCCESS,
    payload: data,
  };
};

//functions
const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
};

export const fetchposts = () => (dispatch) => {
  return API.get(`/lecture`)
    .then((res) => {
      console.log(res.data.data);
      dispatch(fetchPostSuccess(res.data.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createLecture = (lect, history) => (dispatch) => {
  console.log(lect);
  return axios
    .post("https://educationgt.herokuapp.com/lecture/", lect, config)
    .then((res) => {
      console.log(res);
      // dispatch(createPostSuccess(res.data));
      dispatch(fetchposts());
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deletePost = (id) => (dispatch) => {
  return axios
    .delete(`https://educationgt.herokuapp.com/lecture/${id}`, config)
    .then(() => dispatch({ type: DELETE_POST, payload: id }))
    .catch((err) => console.log(err));
};
