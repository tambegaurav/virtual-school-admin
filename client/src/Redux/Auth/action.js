import { AUTH } from "./actionTypes";
import axios from "axios";
const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
};

// https://educationgt.herokuapp.com/
export const signin = (formData, router) => async (dispatch) => {
  return axios
    .post(`https://educationgt.herokuapp.com/teacher/login`, formData, config)
    .then((res) => {
      console.log(res.data.result);
      dispatch({ type: AUTH, payload: res.data.result });
      router.push("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signup = (formData, router) => async (dispatch) => {
  return axios
    .post("https://educationgt.herokuapp.com/teacher", formData, config)
    .then((res) => {
      //   console.log(res.data);
      dispatch({ type: AUTH, payload: res.data });
      router.push("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
