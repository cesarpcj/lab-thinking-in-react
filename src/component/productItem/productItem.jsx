import React from 'react';

const ProductItem = (props) => {
  return (
    <li style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div>
        <p>{props.item.name}</p>
      </div>
      <div>
        <p>{props.item.price}</p>
      </div>
    </li>
  );
};

export default ProductItem;
