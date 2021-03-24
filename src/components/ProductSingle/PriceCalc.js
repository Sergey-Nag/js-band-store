import React, { useCallback, useState } from 'react';

export default function PriceCalc({
  price, totalPrice, count, userCount, setUserCount, setTotalPrice,
}) {
  const multiplyPrice = useCallback((value) => (value * price).toFixed(2), [price]);

  const countChange = useCallback(
    ({ target }) => {
      const { value } = target;
      setTotalPrice(multiplyPrice(value));
      setUserCount(value);
    },
    [multiplyPrice, setUserCount, setTotalPrice],
  );

  return (
    <div className="card p-4">
      <div className="row">
        <div className="col-md-8">
          <p>Price, $</p>
        </div>
        <div className="col text-right">
          <p>{price}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <p>Count</p>
        </div>
        <div className="col text-right">
          <div className="input-group" size="sm" style={{ marginTop: '-3px' }}>
            <input
              className="form-control form-control-sm"
              type="number"
              min="1"
              max={count}
              value={userCount}
              onChange={countChange}
            />
          </div>
        </div>
      </div>
      <div className="row font-weight-bold">
        <div className="col-md-8">
          <p>Total Price, $</p>
        </div>
        <div className="col text-right">
          <p>{totalPrice}</p>
        </div>
      </div>
    </div>
  );
}
