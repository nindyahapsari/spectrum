/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { CartContext } from '../context/Cart.context'
import { useNavigate } from 'react-router-dom'

import CartItem from '../components/CardCheckout'

import './Cart.css'

const Cart = () => {
  const { cart, getTotalCartAmount, getCartItems, checkout } =
    useContext(CartContext)
  const totalAmount = getTotalCartAmount()
  const cartItems = getCartItems()

  const navigate = useNavigate()

  const handleCheckout = () => {
    checkout()
    navigate('/confirmation')
  }

  return (
    <div className="main-container-cart">
      <h3 className='ticket-cart'>Ticket Cart</h3>

      <div className="container">
        {cartItems.map((item) => {
          if (item.quantity > 0) {
            return (
              <div key={item._id} className="cart-item-box">
                <div>
                  <CartItem flight={item} />
                </div>
                <div>
                  <p>Quantity: {cart[item._id]}</p>
                </div>
              </div>
            )
          }
        })}
      </div>
      <div>
        {totalAmount > 0 ? (
          <div>
            <p className='total-amount'>Subtotal: ${totalAmount}</p>
            <button className='btn-pay' onClick={handleCheckout}>Pay</button>
          </div>
        ) : (
          <h2>Your shopping cart is empty</h2>
        )}
      </div>
    </div>
  )
}

export default Cart
