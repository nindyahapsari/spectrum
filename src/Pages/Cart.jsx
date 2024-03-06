/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { CartContext } from '../context/cart.context'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cart, getTotalCartAmount, checkout } = useContext(CartContext)
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()

  const handleCheckout = () => {
    checkout()
    navigate('/confirmation')
  }

  return (
    <div>
      <h1>Cart</h1>

      <div>
        {/* 
            {
TICKETS.map((ticket) => (
                if (cart[ticket.id] !== 0) {
                return <CartItem data={tickets} />
                }))

                        }
                */}
      </div>

      {totalAmount > 0 ? (
        <div>
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={handleCheckout}>Pay</button>
        </div>
      ) : (
        <h1>Your shopping cart is empty</h1>
      )}
    </div>
  )
}

export default Cart
