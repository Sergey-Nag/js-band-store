import {
  LOAD_BOOKS,
  LOAD_BOOKS_LOADING,
  LOAD_BOOKS_ERROR,
  LOAD_BOOK_BY_ID,
  LOAD_BOOK_BY_ID_LOADING,
  CLEAR_BOOK_SINGLE,
  FILTER_BOOKS,
  CLEAR_FILTER_BOOKS,
} from '../types/booksTypes';

const initialState = {
  catalog: [],
  filteredCatalog: null,
  single: null,
  isCatalogLoading: false,
  isSingleLoading: false,
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BOOKS:
      return {
        ...state,
        catalog: action.payload,
        isCatalogLoading: false,
      };
    case LOAD_BOOKS_LOADING:
      return {
        ...state,
        isCatalogLoading: true,
      };
    case LOAD_BOOK_BY_ID:
      return {
        ...state,
        single: action.payload,
        isSingleLoading: false,
      };
    case LOAD_BOOK_BY_ID_LOADING:
      return {
        ...state,
        isSingleLoading: true,
      };
    case LOAD_BOOKS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_BOOK_SINGLE:
      return {
        ...state,
        single: null,
      };
    case FILTER_BOOKS:
      return {
        ...state,
        filteredCatalog: [
          ...state.catalog.filter(action.payload),
        ],
      };
    case CLEAR_FILTER_BOOKS:
      return {
        ...state,
        filteredCatalog: null,
      };
    default:
      return state;
  }
}
