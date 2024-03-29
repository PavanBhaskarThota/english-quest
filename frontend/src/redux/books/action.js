import axios from "axios";
import {
  BOOKS_ADD_FAILURE,
  BOOKS_ADD_REQUEST,
  BOOKS_ADD_SUCCESS,
  BOOKS_DELETE,
  BOOKS_FAILURE,
  BOOKS_REQUEST,
  BOOKS_SUCCESS,
} from "./actiontype";

export const getBooksfun = (data, value) => (dispatch) => {
  dispatch({ type: BOOKS_REQUEST });
  return axios
    .get(`https://english-quest-go3m.onrender.com/books?${data}=${value}`)
    .then((res) => {
      dispatch({ type: BOOKS_SUCCESS, payload: res.data });
      return res.data.book;
    })
    .catch((err) => {
      dispatch({ type: BOOKS_FAILURE, payload: err });
    });
};

export const addBooksfun = (book) => (dispatch) => {
  dispatch({ type: BOOKS_REQUEST });
  const token = JSON.parse(sessionStorage.getItem("token"));

  return axios
    .post(`https://english-quest-go3m.onrender.com/books`, book, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch({ type: BOOKS_ADD_SUCCESS, payload: res.data });
      return res;
    })
    .catch((err) => {
      dispatch({ type: BOOKS_ADD_FAILURE, payload: err });
    });
};

export const deleteBookfun = (id) => (dispatch) => {
  dispatch({ type: BOOKS_REQUEST });
  const token = JSON.parse(sessionStorage.getItem("token"));

  return axios
    .delete(`https://english-quest-go3m.onrender.com/books/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch({ type: BOOKS_DELETE, payload: res.data });
      return res.data;
    })
    .catch((err) => {
      dispatch({ type: BOOKS_ADD_FAILURE, payload: err });
    });
};
