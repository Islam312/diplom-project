import React from 'react';

import "./Product.scss"

export default function Product({key, product}) {
  return (
    <li key={key}>
      <div className="card">
        <a href={`/product/${product._id}`}>
          <img className="card__img" src={product.image} alt={product.name} />
        </a>
        <div className="card__body">
          <a href={`/product/${product._id}`}>
            <h2 className="card__name">{product.name}</h2>
          </a>
          <div className="card__price">{product.price}$</div>
        </div>
      </div>
    </li>
  );
}
