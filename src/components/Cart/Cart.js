import React, { useEffect, useState } from 'react';
import Wrapp from '../Wrapp/Wrapp';

export default function Cart({ items }) {
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    const total = items.reduce((acc, { totalPrice }) => acc + totalPrice, 0);
    setTotalSum(total.toFixed(2));
  }, [items]);

  return (
    <Wrapp>
      <div className="col">
        <div className="card p-4">
          <table className="table">
            <thead>
              <tr>
                <th className="w-75 border-top-0">Name</th>
                <th className="border-top-0">Count</th>
                <th className="border-top-0">Price</th>
                <th className="text-right border-top-0">Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map(({
                id, title, userCount, price, totalPrice,
              }) => (
                <tr key={id}>
                  <td>{title}</td>
                  <td>{userCount}</td>
                  <td>{price}</td>
                  <td className="text-right">{totalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="row mt-4 justify-content-end">
          <div className="col-md-2 col-sm-4 text-right">
            <b>
              Total Price:
              {' '}
              {totalSum}
              $
            </b>
          </div>
        </div>
      </div>
    </Wrapp>
  );
}
