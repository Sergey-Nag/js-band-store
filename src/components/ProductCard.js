import React from 'react';
import {
  Card, Col, Row, Button,
} from 'react-bootstrap';

export default function ProductCard({ product }) {
  const {
    title, price, cover, author,
  } = product;

  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={cover} style={{ height: 200 }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
        <Row>
          <Col lg="5">
            <span className="price">{price}</span>
          </Col>
          <Col lg="7">
            <Button href="/" className="w-100">
              View
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
