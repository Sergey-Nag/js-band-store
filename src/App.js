import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import login from './pages/login';
import catalog from './pages/catalog';
import product from './pages/product';
import cart from './pages/cart';

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/login" component={login} />
        <Route exact path="/catalog" component={catalog} />
        <Route path="/catalog/:id" component={product} />
        <Route exact path="/cart" component={cart} />
        <Route path="/404" />
      </Switch>
    </Router>
  );
}
