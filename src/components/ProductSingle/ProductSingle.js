import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import ProductDescription from './ProductDescription';
import PriceCalc from './PriceCalc';
import Wrapp from '../Wrapp/Wrapp';
import { pushProductToCart } from '../../store/actions/cartActions';

export default function ProductSingle({ product }) {
  const [userCount, setUserCount] = useState(product.price);
  const dispatch = useDispatch();

  const addProductToCart = useCallback(() => {
    const { id, title, price } = product;
    dispatch(pushProductToCart({
      id, title, userCount, price,
    }));
  },
  [dispatch, product, userCount]);

  return (
    <Wrapp>
      <div className="col-md-8">
        <ProductDescription product={product} />
      </div>
      <div className="col-md-4">
        <PriceCalc
          price={product.price}
          count={product.count}
          setUserCount={setUserCount}
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
