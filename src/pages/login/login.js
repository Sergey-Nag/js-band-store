import React from 'react';
import './login.scss';
import { Col, Container, Row } from 'react-bootstrap';

import LoginCard from '../../components/Login';

export default function login() {
  return (
    <Container className="full-height">
      <Row className="justify-content-center h-100">
        <Col sm="6" xl="4">
          <div className="d-flex flex-column justify-content-center h-100">
            <LoginCard />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
