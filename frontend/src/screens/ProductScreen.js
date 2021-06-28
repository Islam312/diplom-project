import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';
import { detailsProduct } from '../actions/productActions';

export default function ProductScreen(props) {
  const dispatch = useDispatch();

  const productId = props.match.params.id;

  const [qty, setQty] = useState(1);

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/" className="back-to">
            Back to result
          </Link>
          <div className="container row cart-product">
            <img
              className="cart-product__img"
              src={product.image}
              alt={product.name}
            ></img>
            <div className="cart-product__text">
              <h2 className="cart-product__title">{product.name}</h2>
              <div className="cart-product__price">$ {product.price}</div>
              <div className="cart-product__stars">
                <Rating rating={product.rating}></Rating>
              </div>
              <div className="cart-product__description">
                Description:<div>{product.description}</div>
              </div>
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
                {product.countInStoke > 0 && (
                  <>
                    <li>
                      <div className="row">
                        <div>Qty</div>
                        <div>
                          <select
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStoke).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                      </div>
                    </li>

                    <li>
                      <button
                        onClick={addToCartHandler}
                        className="add-to-card"
                        data-title="ADD TO CART"
                      ></button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
