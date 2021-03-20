import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';

export default function Catalog({ items }) {
  return (
    <Container>
      <Row className="px-3">
        {items.map((item) => (
          <Col sm="6" md="4" lg="3" key={item.title}>
            <ProductCard product={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
