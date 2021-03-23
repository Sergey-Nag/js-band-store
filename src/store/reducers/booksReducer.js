import {
  LOAD_BOOKS,
  LOAD_BOOKS_LOADING,
  LOAD_BOOKS_ERROR,
} from '../types/booksTypes';

const initialState = {
  list: [],
  isLoading: false,
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BOOKS:
      return {
        ...state,
        list: action.payload,
        isLoading: false,
      };
    case LOAD_BOOKS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_BOOKS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
