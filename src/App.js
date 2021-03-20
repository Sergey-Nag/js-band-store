import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import login from './pages/login';
import catalog from './pages/catalog';
import product from './pages/product';

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" />
        <Route path="/login" component={login} />
        <Route path="/catalog" component={catalog} />
        <Route path="/catalog/:id" component={product} />
        <Route path="/cart" />
        <Route path="/404" />
      </Switch>
    </Router>
  );
}
