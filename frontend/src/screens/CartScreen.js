import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';

export default function CartScreen(props) {
  const productId = props.match.params.id;

  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log('cartItems =>>', cartItems);

  // console.log('cartItems =>>', cartItems.countInStoke);
  //*dispatch productId and quantity of product
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    //*delete shopping cart
    dispatch(removeFromCart(id))
  };
  const checkOutHandler = () => {
    //* Proceed to Checkout
    props.history.push('/sign?redirect=shipping');
  };

  return (
    <div className="row top container">
      <div className="shopping-cart">
        <h1 className="shopping-cart__title">Shoping Cart</h1>
        {cartItems.length === 0 ? (
          <MessageBox>
            Cart is empty!!
          </MessageBox>
        ) : (
          <ul className="shopping-cart__list">
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="row">
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="shopping-cart__image small"
                    ></img>
                  </div>
                  <div className="min-30">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div className="shopping-cart__select">
                    <select
                      value={item.qty}
                      onChange={(e) => {
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        );
                      }}
                    >
                      {[...Array(cartItems.countInStoke).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="shopping-cart__price">$ {item.price}</div>
                  <div className="shopping-cart__del">
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
            <div className='go-shopping'><Link to="/"><button className='add-to-card' data-title='Go Shopping'></button></Link></div>
      </div>
      <div className="cart-calculate">
        <ul className="cart-calculate__list">
          <li className="cart-calculate__total-price">
            <h2>
              Total price: ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : ${' '}
              {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
            </h2>
          </li>
          <li className="cart-calculate__check">
            <button
              type="button"
              onClick={checkOutHandler}
              className="add-to-card"
              data-title="Proceed to Checkout"
              disabled={cartItems.length === 0}
            ></button>
          </li>
        </ul>
      </div>
    </div>
  );
}
