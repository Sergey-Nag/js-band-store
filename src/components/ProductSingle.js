import React from 'react';
import { Col, Button } from 'react-bootstrap';
import ProductDescription from './ProductDescription';
import PriceCalc from './PriceCalc';
import Wrapp from './Wrapp';

export default function ProductSingle({ product }) {
  return (
    <Wrapp>
      <Col md="8">
        <ProductDescription product={product} />
      </Col>
      <Col>
        <PriceCalc price={product.price} />
        <div className="pt-4 text-right">
          <Button variant="success">Add to cart</Button>
        </div>
      </Col>
    </Wrapp>
  );
}
