import React from 'react';
import {
  Table, Col, Card, Row, Button,
} from 'react-bootstrap';
import Wrapp from './Wrapp';

export default function Cart({ items }) {
  return (
    <Wrapp>
      <Col>
        <Row className="mb-4 justify-content-end">
          <Col md="2" sm="4">
            <Button block>Purchase</Button>
          </Col>
        </Row>
        <Card className="p-4">
          <Table>
            <thead>
              <tr>
                <th className="w-75 border-top-0">Name</th>
                <th className="border-top-0">Count</th>
                <th className="border-top-0">Price</th>
                <th className="text-right border-top-0">Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>1</td>
                  <td>{item.price}</td>
                  <td className="text-right">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
        <Row className="mt-4 justify-content-end">
          <Col md="2" sm="4" className="text-right">
            <b>Total Price: 140.00$</b>
          </Col>
        </Row>
      </Col>
    </Wrapp>
  );
}
