import React from 'react';
import Wrapp from '../Wrapp/Wrapp';
import cartIcon from '../../img/shopping-cart.svg';

export default function CartEmpty() {
  return (
    <Wrapp>
      <div className="col text-center text-muted">
        <img
          src={cartIcon}
          className="w-25 p-5 mt-5"
          alt="cart empty"
          style={{ opacity: 0.5 }}
        />
        <h3>Cart empty...</h3>
      </div>
    </Wrapp>
  );
}
