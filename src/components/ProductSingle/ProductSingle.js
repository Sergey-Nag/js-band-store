import React from 'react';
import ProductDescription from './ProductDescription';
import PriceCalc from './PriceCalc';
import Wrapp from '../Wrapp/Wrapp';

export default function ProductSingle({ product }) {
  if (product === null) {
    return <></>;
  }

  return (
    <Wrapp>
      <div className="col-md-8">
        <ProductDescription product={product} />
      </div>
      <div className="col-md-4">
        <PriceCalc price={product.price} count={product.count} />
        <div className="pt-4 text-right">
          <button className="btn btn-success" type="button">
            Add to cart
          </button>
        </div>
      </div>
    </Wrapp>
  );
}
