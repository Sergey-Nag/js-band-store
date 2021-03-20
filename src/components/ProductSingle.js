import React from 'react';
import {
  Col,
  Container,
  Row,
  Button,
} from 'react-bootstrap';
import ProductDescription from './ProductDescription';
import PriceCalc from './PriceCalc';

export default function ProductSingle({ product }) {
  return (
    <Container>
      <Row>
        <Col md="8">
          <ProductDescription product={product} />
        </Col>
        <Col>
          <PriceCalc price={product.price} />
          <div className="pt-4 text-right">
            <Button variant="success">Add to cart</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
