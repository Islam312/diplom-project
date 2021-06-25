import React from 'react'

import data from '../data'
import Rating from '../components/Rating'

export default function ProductScreen(props) {
  const product = data.products.find(item => item._id === props.match.params.id)
  console.log('props.match =>>', props)
  return (
    <div className="container row cart-product">
      <img className="cart-product__img" src={product.image}></img>
      <div className="cart-product__text">
        <h2 className="cart-product__title">
          {product.name}
        </h2>
        <div className="cart-product__price">
          {product.price}
        </div>
        <div className="cart-product__stars"><Rating rating={product.rating}></Rating></div>
        <p className="cart-product__description">
          {product.description}
        </p>
        <ul className="cart-product__list">
          <li>
            <span>
              SKU: 
            </span>
            {product._id}
          </li>
          <li>
            <span>
              Category: 
            </span>
            {product.category}
          </li>
          <li>
            <span>
              Tags: 
            </span>
            {product.tags.join(', ')}
          </li>
        </ul>
      </div>
    </div>
  )
}
