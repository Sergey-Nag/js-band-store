import QueryApi from '../../service/QueryApi';
import {
  LOAD_BOOKS,
  LOAD_BOOKS_LOADING,
  LOAD_BOOKS_ERROR,
  LOAD_BOOK_BY_ID,
} from '../types/booksTypes';

const query = QueryApi.getInstance();

export const loadBooks = () => async (dispatch) => {
  dispatch({
    type: LOAD_BOOKS_LOADING,
  });

  const { token } = JSON.parse(localStorage.getItem('authUser'));

  const req = await query.loadBooks(token);

  if (!req.ok) {
    dispatch({
      type: LOAD_BOOKS_ERROR,
      payload: req.data,
    });

    return;
  }

  dispatch({
    type: LOAD_BOOKS,
    payload: req.data,
  });
};

export const loadBookById = (id) => async (dispatch) => {
  dispatch({
    type: LOAD_BOOKS_LOADING,
  });

  const { token } = JSON.parse(localStorage.getItem('authUser'));

  const req = await query.loadBookById(id, token);

  if (!req.ok) {
    dispatch({
      type: LOAD_BOOKS_ERROR,
      payload: req.data,
    });

    return;
  }

  dispatch({
    type: LOAD_BOOK_BY_ID,
    payload: req.data,
  });
};
