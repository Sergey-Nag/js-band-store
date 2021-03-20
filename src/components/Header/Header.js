import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

export default function Header() {
  return (
    <header className="mb-4">
      <Row
        className="border-bottom p-3 justify-content-end"
      >
        <Col sm="1" className="text-right">
          <span className="d-inline-block" style={{ paddingTop: '.2rem' }}>
            Alexander
          </span>
        </Col>
        <Col sm="1">
          <Button variant="secondary" size="sm" className="w-100">
            Sign Out
          </Button>
        </Col>
      </Row>
      <Row className="border-bottom py-4 px-3">
        <Col sm="10">
          <h2>JS Band Store</h2>
        </Col>
        <Col sm="2">
          <div className="d-flex flex-column justify-content-center h-100">
            <Button variant="outline-secondary">Cart</Button>
          </div>
        </Col>
      </Row>
    </header>
  );
}
