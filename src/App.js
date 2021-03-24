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

export default function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signinFromStorage());
  }, [user.token, dispatch]);

  return (
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
  );
}
