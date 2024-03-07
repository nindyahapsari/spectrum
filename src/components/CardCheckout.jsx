import React, { useContext } from 'react'
import { CartContext } from '../context/cart.context'
import './CardCheckout.css'

const CartItem = ({ flight }) => {
  const { removeFromCart } = useContext(CartContext)

  return (
    <div className="cart-item">
      <h2>{flight.airline}</h2>
      <p>Flight Number: {flight.flightNumber}</p>
      <p>Departure: {new Date(flight.departureTime).toLocaleString()}</p>
      <p>Destination: {flight.destination}</p>
      <p>Arrival: {new Date(flight.arrivalTime).toLocaleString()}</p>
      <p>Quantity: {flight.quantity}</p>
      <p>Price: ${flight.price}</p>
      <button onClick={() => removeFromCart(flight._id)}>
        Remove from cart
      </button>
    </div>
  )
}

export default CartItem
