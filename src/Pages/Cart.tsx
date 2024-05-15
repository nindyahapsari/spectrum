/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import { CartContext } from '../context/Cart.context';

import CardCheckoutItem from '../components/CardCheckoutItem';

import './Cart.css';
import { AuthContext } from '../context/Auth.context';

function Cart() {
  const { initData, getTotalCartAmount, getCartItems, checkout } =
    useContext(CartContext);
  const totalAmount = getTotalCartAmount();
  const cartItems = getCartItems();

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleCheckout = () => {
    checkout(user._id);
    navigate('/confirmation');
  };

  return (
    <div className="main-container-cart">
      <h3 className="ticket-cart">Ticket Cart</h3>

      <div className="container">
        {cartItems.map((item) => {
          if (item.quantity > 0) {
            return (
              <div key={item._id} className="cart-item-box">
                <div>
                  <CardCheckoutItem flight={item} />
                </div>
                <div>
                  <p>Quantity: {initData[item._id]}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div>
        {totalAmount > 0 ? (
          <div>
            <p className="total-amount">Subtotal: ${totalAmount}</p>
            <Button className="btn-pay" onClick={handleCheckout}>
              Pay
            </Button>
          </div>
        ) : (
          <h2>Your shopping cart is empty</h2>
        )}
      </div>
    </div>
  );
}

export default Cart;
