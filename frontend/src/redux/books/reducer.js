import {
  BOOKS_ADD_REQUEST,
  BOOKS_ADD_SUCCESS,
  BOOKS_DELETE,
  BOOKS_FAILURE,
  BOOKS_REQUEST,
  BOOKS_SUCCESS,
} from "./actiontype";

const initialState = {
  isLoading: false,
  isError: false,
  books: [],
  status:''
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case BOOKS_REQUEST:
      return { ...state, isLoading: true };

    case BOOKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case BOOKS_ADD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        // books: payload.book,
      };

    case BOOKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        books: payload.book,
      };
    case BOOKS_DELETE:
      return {
        ...state,
        isLoading: false,
        isError: false,
        // books: payload.book,

      };

    default:
      return state;
  }
};
