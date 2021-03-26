import QueryApi from '../../service/QueryApi';
import {
  PURCHASE_ERROR,
  PURCHASE_SENDING,
  PURCHASE_SUCCESS,
} from '../types/purchaseTypes';

const query = QueryApi.getInstance();

const purchaseCart = (products) => async (dispatch) => {
  const productsId = products.map(({ id }) => id);
  console.log(productsId);
  dispatch({
    type: PURCHASE_SENDING,
  });

  const { token } = JSON.parse(localStorage.getItem('authUser'));

  const req = await query.purchase(productsId, '123');

  if (!req.ok) {
    console.log('error', req);
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
