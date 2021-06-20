import React from 'react';

import data from './data';

import './App.css';

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div className="logo">
          <a href="/">Luxury</a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main className="row center">
        <ul className="list-product row center">
          {data.products.map((item) => (
            <li key={item._id}>
              <div className="card">
                <a href={`/product/${item._id}`}>
                  <img src={item.image} alt={item.name} />
                </a>
                <div className="card-body">
                  <a href={`/product/${item._id}`}>
                    <h2 className="product-name">{item.name}</h2>
                  </a>
                  <div className="price">{item.price}$</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
      <footer className="row center">Made by kayfaRik</footer>
    </div>
  );
}

export default App;
