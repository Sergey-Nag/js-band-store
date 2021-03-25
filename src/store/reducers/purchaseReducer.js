import {
  PURCHASE_SUCCESS,
  PURCHASE_ERROR,
  PURCHASE_SENDING,
  CLEAR_PURCHASE,
} from '../types/purchaseTypes';

const initialState = {
  isSending: false,
  isSuccess: false,
  error: {},
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case PURCHASE_SENDING:
      return {
        ...state,
        isSending: true,
      };
    case PURCHASE_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isSending: false,
      };
    case PURCHASE_ERROR:
      return {
        ...state,
        error: action.payload,
        isSending: false,
      };
    case CLEAR_PURCHASE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
