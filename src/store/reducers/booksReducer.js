import {
  LOAD_BOOKS,
  LOAD_BOOKS_LOADING,
  LOAD_BOOKS_ERROR,
  LOAD_BOOK_BY_ID,
} from '../types/booksTypes';

const initialState = {
  catalog: [],
  single: null,
  isLoading: false,
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BOOKS:
      return {
        ...state,
        catalog: action.payload,
        isLoading: false,
      };
    case LOAD_BOOK_BY_ID:
      return {
        ...state,
        single: action.payload,
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
