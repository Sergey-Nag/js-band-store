import { combineReducers } from 'redux';
import userReducer from './userReducer';
import booksReducer from './booksReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  user: userReducer,
  books: booksReducer,
  cart: cartReducer,
});

export default rootReducer;
