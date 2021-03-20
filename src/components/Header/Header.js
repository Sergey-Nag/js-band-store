import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cartIcon from '../../img/shopping-cart.svg';
import Wrapp from '../Wrapp';

export default function Header() {
  return (
    <header className="mb-5">
      <div className="bg-dark text-light">
        <Wrapp className="py-2 justify-content-end">
          <Col xs="8" md="2" className="text-right">
            <span className="d-inline-block" style={{ paddingTop: '.2rem' }}>
              Alexander
            </span>
          </Col>
          <Col xs="4" md="2">
            <Button variant="secondary" size="sm" block>
              Sign Out
            </Button>
          </Col>
        </Wrapp>
      </div>
      <div className="border-bottom bg-light">
        <Wrapp className="py-5">
          <Col xs="8" md="10">
            <h2>JS Band Store</h2>
          </Col>
          <Col xs="4" md="2">
            <div className="d-flex flex-column justify-content-center h-100">
              <Link to="/cart" className="bttn light">
                <img className="bttn-img" src={cartIcon} alt="cart" />
                Cart
                {' '}
                <b>(0)</b>
              </Link>
            </div>
          </Col>
        </Wrapp>
      </div>
    </header>
  );
}
