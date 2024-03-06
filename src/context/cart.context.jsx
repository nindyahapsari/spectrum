/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'
//should import data here

//mock
const TICKETS = [
  {
    id: 1,
    name: 'Economy',
    price: 1000,
  },
  {
    id: 2,
    name: 'Business',
    price: 2000,
  },
  {
    id: 3,
    name: 'First Class',
    price: 3000,
  },
]

const CartContext = createContext(null)

const getFlightDefaultCard = () => {
  let cart = {}
  for (let i = 0; i < TICKETS.length; i++) {
    cart[TICKETS[i].id] = 1
  }

  return cart
}

const CartContextProvider = (props) => {
  const [cart, setCart] = useState(getFlightDefaultCard())

  const getTotalCartAmount = () => {
    console.log(cart)
    let totalAmount = 0
    for (const ticket in cart) {
      if (cart[ticket] > 0) {
        let ticketData = TICKETS.find((t) => t.id === parseInt(ticket))
        totalAmount += ticketData.price * cart[ticket]
      }
    }
    return totalAmount
  }

  const addToCart = (id) => {
    setCart({ ...cart, [id]: cart[id] + 1 })
  }

  const removeFromCart = (id) => {
    setCart({ ...cart, [id]: cart[id] - 1 })
  }

  const checkout = () => {
    setCart(getFlightDefaultCard())
  }

  const contextValue = {
    cart,
    getTotalCartAmount,
    addToCart,
    removeFromCart,
    checkout,
  }

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  )
}

export { CartContext, CartContextProvider }
