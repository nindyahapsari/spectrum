import { Flight } from './flight';

export interface CartItem extends Flight {
  quantity: number;
}
export interface CartContextType {
  initData: Flight[];
  cart: { [key: string]: number };
  getCartItems: () => CartItem[];
  getTotalCartAmount: () => number;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  checkout: (userId: string) => Promise<void>;
}
