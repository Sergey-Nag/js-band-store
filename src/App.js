import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import login from './pages/login';
import main from './pages/main/main';

export default function App() {
  return (
    <Container className="full-height" fluid>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={main} />
          <Route path="/login" component={login} />
          <Route path="/catalog" />
          <Route path="/catalog/:id" />
          <Route path="/cart" />
          <Route path="/404" />
        </Switch>
      </Router>
    </Container>
  );
}
