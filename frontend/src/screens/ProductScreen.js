import React from 'react';
import { Link } from 'react-router-dom';

import data from '../data';
import Rating from '../components/Rating';

export default function ProductScreen(props) {
  const product = data.products.find(
    (item) => item._id === props.match.params.id
  );
  console.log('props.match =>>', props);
  return (
   <div>
     <Link to='/' className='back-to'> Back to result</Link>
      <div className="container row cart-product">
      <img className="cart-product__img" src={product.image} alt={product.name}></img>
      <div className="cart-product__text">
        <h2 className="cart-product__title">{product.name}</h2>
        <div className="cart-product__price">$ {product.price}</div>
        <div className="cart-product__stars">
          <Rating rating={product.rating}></Rating>
        </div>
        <p className="cart-product__description">
          Description:<div>{product.description}</div>
        </p>
        <ul className="cart-product__list">
          <li>
            <span>SKU:</span>
            {product._id}
          </li>
          <li>
            <span>Category:</span>
            {product.category}
          </li>
          <li>
            <span>Tags:</span>
            {product.tags.join(', ')}
          </li>
          <li>
            <span>Status:</span>
            {product.countInStoke ? (
              <span className="stoke in-stoke">In Stoke</span>
            ) : (
              <span className="stoke out-of-stoke">Out of Stoke</span>
            )}
          </li>
        </ul>
        <div>
          <button className='add-to-card'></button>
        </div>
      </div>
    </div>
   </div>
  );
}
