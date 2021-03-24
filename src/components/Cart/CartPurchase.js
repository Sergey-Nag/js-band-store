import React from 'react';
import Wrapp from '../Wrapp/Wrapp';

export default function CartPurchase() {
  return (
    <Wrapp>
      <div className="col">
        <div className="row mb-4 justify-content-end">
          <div className="col-md-2 col-sm-4">
            <button className="bttn primary solid" type="button">Purchase</button>
          </div>
        </div>
      </div>
    </Wrapp>
  );
}
