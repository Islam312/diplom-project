import React from 'react';
import './CheckoutSteps.scss'

export default function CheckoutSteps(props) {
  return (
    <div className="checkout-steps">
      <div className={props.step1 ? 'active' : ''}>Sign In</div>
      <div className={props.step2 ? 'active' : ''}>Shiping</div>
      <div className={props.step3 ? 'active' : ''}>Payment</div>
      <div className={props.step4 ? 'active' : ''}>Place Order</div>
    </div>
  );
}
