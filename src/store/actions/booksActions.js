import QueryApi from '../../service/QueryApi';
import {
  LOAD_BOOKS,
  LOAD_BOOKS_LOADING,
  LOAD_BOOKS_ERROR,
  LOAD_BOOK_BY_ID,
  LOAD_BOOK_BY_ID_LOADING,
  CLEAR_BOOK_SINGLE,
  FILTER_BOOKS,
  CLEAR_FILTER_BOOKS,
  ADD_FILTER_BOOKS_BY_PRICE,
  CLEAR_FILTER_BOOKS_BY_PRICE,
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
    type: LOAD_BOOK_BY_ID_LOADING,
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

export const clearBookSingle = () => ({
  type: CLEAR_BOOK_SINGLE,
});

export const filterBooksByPrice = (value) => (dispatch) => {
  let payload;

  if (value === 'to_25') {
    payload = (price) => price < 25;
  } else if (value === 'between') {
    payload = (price) => price > 25 && price < 50;
  } else if (value === 'higher_50') {
    payload = (price) => price > 50;
  } else {
    dispatch({
      type: CLEAR_FILTER_BOOKS_BY_PRICE,
    });
  }

  dispatch({
    type: ADD_FILTER_BOOKS_BY_PRICE,
    payload,
  });

  dispatch({
    type: FILTER_BOOKS,
  });
};

export const filterByTitle = (value) => {
  let payload;

  if (value) {
    payload = ({ title }) => title.toLowerCase().includes(value.toLowerCase());
  } else {
    return {
      type: CLEAR_FILTER_BOOKS,
    };
  }

  return {
    type: FILTER_BOOKS,
    payload,
  };
};
