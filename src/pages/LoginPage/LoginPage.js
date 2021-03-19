import React from 'react';
import './LoginPage.scss';
import { Col, Row } from 'react-bootstrap';

import LoginCard from '../../components/Login';

function LoginPage() {
  return (
    <Row className="justify-content-center h-100">
      <Col sm={3}>
        <div className="d-flex flex-column justify-content-center h-100">
          <LoginCard />
        </div>
      </Col>
    </Row>
  );
}

export default LoginPage;
