import React from 'react';
import {
  Card, Row, Col, InputGroup, FormControl,
} from 'react-bootstrap';

export default function PriceCalc({ price }) {
  return (
    <Card className="p-4">
      <Row>
        <Col md="8">
          <p>Price, $</p>
        </Col>
        <Col className="text-right">
          <p>{price}</p>
        </Col>
      </Row>
      <Row>
        <Col md="8">
          <p>Count</p>
        </Col>
        <Col className="text-right">
          <InputGroup size="sm" style={{ marginBottom: '.7em' }}>
            <FormControl type="number" defaultValue={1} min="1" />
          </InputGroup>
        </Col>
      </Row>
      <Row className="font-weight-bold">
        <Col md="8">
          <p>Total Price, $</p>
        </Col>
        <Col className="text-right">
          <p>{price}</p>
        </Col>
      </Row>
    </Card>
  );
}
