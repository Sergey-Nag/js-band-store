import QueryApi from '../../service/QueryApi';
import {
  PURCHASE_ERROR,
  PURCHASE_SENDING,
  PURCHASE_SUCCESS,
} from '../types/purchaseTypes';

const query = QueryApi.getInstance();

const returnBooksIdArr = (products) => products.reduce((arr, { id, userCount }) => {
  for (let i = 0; i < userCount; i += 1) arr.push(id);
  return arr;
}, []);

const purchaseCart = (products) => async (dispatch) => {
  const productsId = returnBooksIdArr(products);

  dispatch({
    type: PURCHASE_SENDING,
  });

  const { token } = JSON.parse(localStorage.getItem('authUser'));

  const req = await query.purchase(productsId, token);

  if (!req.ok) {
    dispatch({
      type: PURCHASE_ERROR,
      payload: req.data,
    });

    return;
  }

  dispatch({
    type: PURCHASE_SUCCESS,
  });
};

export default purchaseCart;
