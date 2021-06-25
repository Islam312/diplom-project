import React from 'react';

import data from '../data';
import Product from '../components/Product';

export default function HomeScreen() {
  return (
    <ul className="list-product row center container">
      {data.products.map((item) => (
        <Product key={item._id} product={item} />
      ))}
    </ul>
  );
}
