import React from 'react';

const CartLoading = () => {
  return (
    <div className=" grid grid-cols-3">
      {[1, 2, 3, 4, 6, 9, 48, 8].map((item) => (
        <div key={item}>
          <progress
            className="progress progress-error w-56"
            value="0"
            max="100"
          ></progress>
          <progress
            className="progress progress-error w-56"
            value="10"
            max="100"
          ></progress>
          <progress
            className="progress progress-error w-56"
            value="40"
            max="100"
          ></progress>
          <progress
            className="progress progress-error w-56"
            value="70"
            max="100"
          ></progress>
          <progress
            className="progress progress-error w-56"
            value="100"
            max="100"
          ></progress>
        </div>
      ))}
    </div>
  );
};

export default CartLoading;
