import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { PURCHASE_API, FLIGHTS_ALL_API } from '../utility/endpoints';

const fetchingData = async () => {
  const response = await axios.get(FLIGHTS_ALL_API);
  const returnedData = response.data;
  return returnedData;
};

const CartContext = createContext(null);

function CartContextProvider(props) {
  const [initData, setInitData] = useState([]);
  const [cart, setCart] = useState(getFlightDefaultCart());

  const navigate = useNavigate();

  useEffect(() => {
    const fetchFlightData = async () => {
      const returnedData = await fetchingData();
      setInitData(returnedData);
    };
    fetchFlightData();
  }, []);

  function getFlightDefaultCart() {
    const cartWithId = {};
    for (let i = 0; i < initData.length; i++) {
      cartWithId[initData[i]._id] = 0;
    }

    return cartWithId;
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const ticket in cart) {
      if (cart[ticket] > 0) {
        const ticketData = initData.find((t) => t._id === ticket);
        if (ticketData) {
          totalAmount += ticketData.price * cart[ticket];
        }
      }
    }
    return totalAmount;
  };

  const getCartItems = () => {
    return Object.keys(cart).map((id) => {
      const item = initData.find((f) => f._id === id);
      console.log(item);
      return {
        ...item,
        quantity: cart[id],
      };
    });
  };

  const addToCart = (id) => {
    setCart({ ...cart, [id]: (cart[id] || 0) + 1 });
  };

  const removeFromCart = (id) => {
    setCart({ ...cart, [id]: (cart[id] || 0) - 1 });
  };

  const checkout = async (userId) => {
    const cartItems = getCartItems();
    const ticketInfo = {
      tickets: cartItems,
      userId: userId,
    };
    try {
      const res = await axios.post(PURCHASE_API, ticketInfo);
      if (res.status === 200) {
        navigate('/confirmation');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const contextValue = {
    initData,
    cart,
    getCartItems,
    getTotalCartAmount,
    addToCart,
    removeFromCart,
    checkout,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContext, CartContextProvider };
