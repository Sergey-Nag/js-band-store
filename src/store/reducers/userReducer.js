import {
  AUTH_USER,
  AUTH_USER_ERROR,
  AUTH_USER_LOADING,
} from '../types/userTypes';

const initialState = {
  authUser: null,
  isLoading: false,
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        isLoading: false,
        authUser: action.payload,
        error: null,
      };
    case AUTH_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case AUTH_USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
