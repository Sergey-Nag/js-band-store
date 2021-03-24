import PUSH_PRODUCT_TO_CART from '../types/cartTypes';

const initialState = [];

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_PRODUCT_TO_CART:
      return [
        ...state,
        action.payload,
      ];
    default:
      return state;
  }
}
