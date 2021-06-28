import React from 'react';
import { Link } from 'react-router-dom';

import "./Product.scss"

export default function Product({product}) {
  return (
    <li>
      <div className="card">
        <Link to={`/product/${product._id}`}>
          <img className="card__img" src={product.image} alt={product.name} />
        </Link>
        <div className="card__body">
          <Link to={`/product/${product._id}`}>
            <h2 className="card__name">{product.name}</h2>
          </Link>
          <div className="card__price">{product.price}$</div>
        </div>
      </div>
    </li>
  );
}
