import React from 'react';
import {
  Card, Col, Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const {
    id, title, price, cover, author,
  } = product;

  return (
    <Card className="mb-4">
      <Card.Img className="product__image" variant="top" src={cover} style={{ height: 200 }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
        <Row>
          <Col lg="5">
            <span className="price">{price}</span>
          </Col>
          <Col lg="7">
            <Link to={`/catalog/${id}`} className="bttn primary">
              View
            </Link>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
