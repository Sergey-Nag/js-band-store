import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LoginPage from './pages/LoginPage';
import CatalogPage from './pages/CatalogPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import { signinFromStorage } from './store/actions/userActions';
import Modal from './components/Modal';
import { OPEN_MODAL } from './store/types/modalTypes';
import Cart from './components/Cart/Cart';
import { CLEAR_PURCHASE } from './store/types/purchaseTypes';
import { CLEAR_CART } from './store/types/cartTypes';

export default function App() {
  const user = useSelector((state) => state.user);
  const modal = useSelector((state) => state.modal);
  const cart = useSelector((state) => state.cart);
  const purchase = useSelector((state) => state.purchase);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signinFromStorage());
  }, [user.token, dispatch]);

  useEffect(() => {
    if (purchase.isSuccess) {
      dispatch({
        type: OPEN_MODAL,
        payload: {
          title: 'You successfully placed an order',
          message: <Cart items={cart} />,
          onClose: () => {
            dispatch({ type: CLEAR_PURCHASE });
            dispatch({ type: CLEAR_CART });
          },
        },
      });
    }
  }, [purchase.isSuccess, dispatch, cart]);

  return (
    <>
      {modal.message && <Modal message={modal.message} />}
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={LoginPage} />
          <Route path="/404" component={NotFoundPage} />
          <Route exact path="/catalog" component={CatalogPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route path="/catalog/:id" component={ProductPage} />
          <Route path="/404" component={NotFoundPage} />
        </Switch>
      </Router>
    </>
  );
}
