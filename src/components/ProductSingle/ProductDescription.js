import React from 'react';
import {
  Card, Row, Col, Badge,
} from 'react-bootstrap';

export default function ProductDescription({ product }) {
  return (
    <Card>
      <Row>
        <Col>
          <img src={product.cover} className="w-100" alt="a" />
          <p className="p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Col>
        <Col>
          <div className="pt-4 pr-4">
            <h3>{product.title}</h3>
            <span className="text-muted h6">{product.author}</span>
            <p className="tags">
              <Badge variant="secondary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
            </p>
          </div>
        </Col>
      </Row>
    </Card>
  );
}
