import { AUTH_USER, AUTH_USER_ERROR } from '../types/userTypes';

const initialState = {
  authUser: null,
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      console.log('auth');
      return {
        authUser: action.payload,
        error: null,
      };
    case AUTH_USER_ERROR:
      console.log('error');
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
