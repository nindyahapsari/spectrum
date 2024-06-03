import React, { useState, useContext } from 'react';
import './ConfirmationPage.css';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/Cart.context';

import CheckoutCardPayment from '../components/CheckoutCardPayment';

function ConfirmationPage() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { getCartItems } = useContext(CartContext);
  const cartItems = getCartItems();
  console.log('cartItems', cartItems);

  const navigate = useNavigate();

  const handlePayment = () => {
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);

      navigate('/');
    }, 3000);
  };

  return (
    <div className="checkout-page">
      <div>
        <h2>Checkout Confirmation</h2>
      </div>
      {/* <div>{isSuccess && <Alert color="green">Payment success</Alert>}</div> */}
      <div>
        <CheckoutCardPayment handlePayment={handlePayment} />
      </div>
    </div>
  );
}

export default ConfirmationPage;
