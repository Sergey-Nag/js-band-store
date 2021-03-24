import React from 'react';
import {
  Col,
  InputGroup,
  FormControl,
  Form,
} from 'react-bootstrap';
import searchIcon from '../../img/search.svg';
import filterIcon from '../../img/filter.svg';
import Wrapp from '../Wrapp/Wrapp';

export default function CatalogControls() {
  return (
    <Wrapp>
      <Col md="6" lg="3">
        <InputGroup className="mb-4">
          <InputGroup.Prepend>
            <InputGroup.Text>
              <img src={searchIcon} style={{ width: 15 }} alt="icon" />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl aria-label="Small" placeholder="Find a book..." />
        </InputGroup>
      </Col>
      <Col md="6" lg="3">
        <InputGroup className="mb-4">
          <InputGroup.Prepend>
            <InputGroup.Text>
              <img src={filterIcon} style={{ width: 15 }} alt="icon" />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control as="select" custom>
            <option>Price...</option>
            <option>&lt; 25</option>
            <option>25 &lt; price &lt; 50</option>
            <option>&gt; 50</option>
          </Form.Control>
        </InputGroup>
      </Col>
    </Wrapp>
  );
}
