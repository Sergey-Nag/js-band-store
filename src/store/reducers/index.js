import { combineReducers } from 'redux';
import userReducer from './userReducer';
import booksReducer from './booksReducer';
import cartReducer from './cartReducer';
import purchaseReducer from './purchaseReducer';

const rootReducer = combineReducers({
  user: userReducer,
  books: booksReducer,
  cart: cartReducer,
  purchase: purchaseReducer,
});

export default rootReducer;
