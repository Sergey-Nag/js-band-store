import React from 'react';
import {
  Col, InputGroup, FormControl, Row,
} from 'react-bootstrap';
import icon from '../img/unknown-guy.svg';

export default function CatalogControls() {
  return (
    <Row className="p-3">
      <Col md="3">
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm"><img src={icon} alt="icon" /></InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Find a book..."
          />
        </InputGroup>
      </Col>
      <Col md="3">
        <select>
          <option>1</option>
        </select>
      </Col>
    </Row>
  );
}
