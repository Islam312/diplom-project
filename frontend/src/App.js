import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import './App.scss';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
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
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
      </main>
      <footer className="row center">Made by kayfaRik</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
