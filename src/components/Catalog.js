import React from 'react';
import { Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import Wrapp from './Wrapp';

export default function Catalog({ items }) {
  return (
    <Wrapp>
      {items.map((item) => (
        <Col sm="6" md="4" lg="3" key={item.title}>
          <ProductCard product={item} />
        </Col>
      ))}
    </Wrapp>
  );
}
