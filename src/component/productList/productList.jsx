import React from 'react';
import ProductItem from './../productItem/productItem';

const ProductList = (props) => {
  return (
    <div>
      <ul>
        <li style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div>
            <h3>NAME</h3>
          </div>
          <div>
            <h3>PRICE</h3>
          </div>
        </li>
        {props.data
          .filter((item) => {
            if (props.onStock) {
              return (
                item.name.toLowerCase().includes(props.query.toLowerCase()) &&
                item.stocked
              );
            } else {
              return item.name
                .toLowerCase()
                .includes(props.query.toLowerCase());
            }
          })
          .map((item) => (
            <ProductItem key={item.name} item={item}></ProductItem>
          ))}
      </ul>
    </div>
  );
};

export default ProductList;
