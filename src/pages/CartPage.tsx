/*
import { useContext } from 'react';
import { CartContext } from '../context/Cart.context';
import { useNavigate } from 'react-router-dom';

import CardCheckoutItem from '../components/cards/CardCheckoutItem';
import { CartContextType } from '../types';

import { Button } from 'react-daisyui';

function Cart() {
  const { getTotalCartAmount, getCartItems } = useContext(
    CartContext
  ) as CartContextType;

  const totalAmount = getTotalCartAmount();
  const cartItems = getCartItems();

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-2xl text-center my-5">Your ticket cart is empty</div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Ticket Cart</h1>

      <div className="flex justify-between">
        <div className="w-3/4">
          {cartItems.map((flight) => (
            <div key={flight._id}>
              <CardCheckoutItem flight={flight} />
            </div>
          ))}
        </div>
        <div className="w-1/4 mx-5 p-4 flex flex-col justify-start items-center bg-white shadow-lg rounded-lg">
          <h2 className="text-xl text-center font-bold mb-4">
            Booking Details
          </h2>
          <div className="mb-4 px-auto text-xl">
            Total Amount: ${totalAmount}
          </div>
          <Button variant="link" className="w-full" onClick={handleCheckout}>
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
*/
