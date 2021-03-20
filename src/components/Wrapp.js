import React from 'react';
import { Container, Row } from 'react-bootstrap';

export default function Wrapp(props) {
  const { children } = props;
  return (
    <Container>
      <Row {...props}>
        {children}
      </Row>
    </Container>
  );
}
