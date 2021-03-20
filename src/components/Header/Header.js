import React from 'react';
import {
  Button, Col, Container, Row,
} from 'react-bootstrap';

export default function Header() {
  return (
    <header className="mb-4">
      <div className="bg-dark text-light">
        <Container>
          <Row className="px-3 py-2 justify-content-end">
            <Col xs="8" md="2" className="text-right">
              <span className="d-inline-block" style={{ paddingTop: '.2rem' }}>
                Alexander
              </span>
            </Col>
            <Col xs="4" md="2">
              <Button variant="secondary" size="sm" className="w-100">
                Sign Out
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="border-bottom bg-light">
        <Container>
          <Row className="py-4 px-3">
            <Col xs="8" md="10">
              <h2>JS Band Store</h2>
            </Col>
            <Col xs="4" md="2">
              <div className="d-flex flex-column justify-content-center h-100">
                <Button variant="outline-secondary">Cart</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
}
