import React, { useState, useContext } from 'react';
import './ConfirmationPage.css';
import { useNavigate } from 'react-router-dom';
import { Typography, Alert } from '@material-tailwind/react';
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
        <Typography variant="h2">Checkout confirmation</Typography>
      </div>
      <div>{isSuccess && <Alert color="green">Payment success</Alert>}</div>
      <div>
        <CheckoutCardPayment handlePayment={handlePayment} />
      </div>
    </div>
  );
}

export default ConfirmationPage;
