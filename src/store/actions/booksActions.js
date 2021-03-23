import QueryApi from '../../service/QueryApi';
import {
  LOAD_BOOKS,
  LOAD_BOOKS_LOADING,
  LOAD_BOOKS_ERROR,
} from '../types/booksTypes';

const query = QueryApi.getInstance();

export const loadBooks = () => async (dispatch) => {
  dispatch({
    type: LOAD_BOOKS_LOADING,
  });

  const { token } = JSON.parse(localStorage.getItem('authUser'));

  const req = await query.loadBooks(token);
  console.log(req.data);
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

export const a = {};
// export const signout = () => {
//   localStorage.removeItem('authUser');

//   return {
//     type: CLEAR_USER,
//   };
// };

// export const signinFromStorage = () => {
//   const userInStorage = localStorage.getItem('authUser');

//   if (!userInStorage) return { type: 'none' };

//   return {
//     type: AUTH_USER,
//     payload: JSON.parse(userInStorage),
//   };
// };
