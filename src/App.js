import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

export default function App() {
  return (
    <Container className="full-height" fluid>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/catalog" />
          <Route path="/catalog/:id" />
          <Route path="/cart" />
          <Route path="/404" />
        </Switch>
      </Router>
    </Container>
  );
}
