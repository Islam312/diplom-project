import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SigninScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    //* TODO: sign in action
  };
  return (
    <div className="container">
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button
            className="form add-to-card"
            data-title="Sign In"
            type="submit"
          ></button>
        </div>
        <div>
          <label />
          <div className="create-acc">
            New customer?
            <Link to="/register" className="create-acc__link">
              Create your account
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
