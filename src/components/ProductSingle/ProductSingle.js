import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import ProductDescription from './ProductDescription';
import PriceCalc from './PriceCalc';
import Wrapp from '../Wrapp/Wrapp';
import { pushProductToCart } from '../../store/actions/cartActions';

export default function ProductSingle({ product }) {
  const [userCount, setUserCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);
  const dispatch = useDispatch();

  const addProductToCart = useCallback(() => {
    const { id, title, price } = product;
    dispatch(pushProductToCart({
      id, title, userCount, price, totalPrice,
    }));
    console.log(userCount);
  },
  [dispatch, product, userCount, totalPrice]);

  return (
    <Wrapp>
      <div className="col-md-8">
        <ProductDescription product={product} />
      </div>
      <div className="col-md-4">
        <PriceCalc
          price={product.price}
          totalPrice={totalPrice}
          count={product.count}
          userCount={userCount}
          setUserCount={setUserCount}
          setTotalPrice={setTotalPrice}
        />
        <div className="pt-4 text-right">
          <button
            className="btn btn-success"
            type="button"
            onClick={addProductToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </Wrapp>
  );
}
