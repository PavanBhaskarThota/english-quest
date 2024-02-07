import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  RESET_AUTH,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./actiontype";

export const userRegisterfun = (user) => (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });
  return axios
    .post(`https://english-quest-go3m.onrender.com/register`, user)
    .then((res) => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
      return res;
    })
    .catch((err) => {
      dispatch({ type: SIGNUP_FAILURE, payload: err });
      return err;
    });
};

export const userLoginfun = (user) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post(`https://english-quest-go3m.onrender.com/login`, user)
    .then((res) => {
      if (res.data.msg == "Login Successfull") {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      return res;
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE, payload: err });
    });
};

export const resetAuth = (dispatch) => {
  dispatch({ type: RESET_AUTH });
};
