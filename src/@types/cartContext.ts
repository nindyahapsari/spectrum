import { Flight } from './flight';
import { UserBillInfo, CardPaymentInfo } from './checkout';

export interface CartItem extends Flight {
  quantity: number;
}

interface CheckoutInfoState {
  bill: UserBillInfo;
  payment: CardPaymentInfo;
}

export type CheckoutInfoType = {
  bill: Partial<UserBillInfo>;
  payment: Partial<CardPaymentInfo>;
  [key: string]: Partial<UserBillInfo> | Partial<CardPaymentInfo>;
};
export interface CartContextType {
  initData: Flight[];
  cart: { [key: string]: number };
  getCartItems: () => CartItem[];
  getTotalCartAmount: () => number;
  addToCart: (id: string) => void;
  removeFromCart: (id: number) => void;
  checkout: (userId: string) => Promise<void>;
  addCheckoutInfo: (checkoutData: Partial<CheckoutInfoType>) => void;
  checkoutInfo: CheckoutInfoState;
}
