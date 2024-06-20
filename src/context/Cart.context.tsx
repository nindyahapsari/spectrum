/*
import { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { PURCHASE_API } from '../utils/endpoints';
import { CartContextType, CartItem, CheckoutInfo } from '../types';
import { DataSourceContext } from './DataSource.context';

type CartContextProviderProps = {
  children: React.ReactNode;
};

const CartContext = createContext<CartContextType | null>(null);

const initialCheckoutInfo: CheckoutInfo = {
  firstName: '',
  lastName: '',
  email: '',
  userName: '',
  fullName: '',
  cardNumber: '',
  expiryDate: '',
  cvv: '',
};

function CartContextProvider(props: CartContextProviderProps) {
  // const [initData, setInitData] = useState<Flight[]>([]);
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [checkoutInfo, setCheckoutInfo] =
    useState<CheckoutInfo>(initialCheckoutInfo);

  const { flights } = useContext(DataSourceContext);

  const navigate = useNavigate();

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const ticket in cart) {
      if (cart[ticket] > 0) {
        const ticketData = flights.find(
          (t) => t._id.toString() === ticket
        );
        if (ticketData) {
          totalAmount += ticketData.price * cart[ticket];
        }
      }
    }
    return totalAmount;
  };

  const getCartItems = () => {
    return Object.keys(cart)
      .map((id) => {
        const item = flights.find((f) => f._id.toString() === id);
        if (!item) return null;

        return {
          ...item,
          quantity: cart[id],
        };
      })
      .filter((item): item is CartItem => item !== null);
  };

  const addToCart = (id: string) => {
    setCart({ ...cart, [id]: (cart[id] || 0) + 1 });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };

      if (updatedCart[id] === 1) {
        delete updatedCart[id];
        return updatedCart;
      }

      updatedCart[id] -= 1;
      return updatedCart;
    });
  };

  const checkout = async (userId: string) => {
    const cartItems = getCartItems();
    const ticketInfo = {
      tickets: cartItems,
      userId,
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

  const addCheckoutInfo = (checkoutData: Partial<CheckoutInfo>) => {
    setCheckoutInfo((prevInfo) => ({
      ...prevInfo,
      ...checkoutData,
    }));
  };

  const clearCart = () => {
    setCart({});
    setCheckoutInfo(initialCheckoutInfo);
  };

  const contextValue: CartContextType = {
    cart,
    getCartItems,
    getTotalCartAmount,
    addToCart,
    removeFromCart,
    checkout,
    checkoutInfo,
    addCheckoutInfo,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContext, CartContextProvider };
*/
