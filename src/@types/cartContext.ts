import { Flight } from './flight';
import { UserBillInfo, CardPaymentInfo, CheckoutInfo } from './checkout';

export interface CartItem extends Flight {
  quantity: number;
}

// export interface CheckoutInfo extends UserBillInfo, CardPaymentInfo {}

export type CheckoutInfoType = Partial<
  UserBillInfo &
    CardPaymentInfo & { firstName: string; lastName: string; userName: string }
>;
export interface CartContextType {
  initData: Flight[];
  cart: { [key: string]: number };
  getCartItems: () => CartItem[];
  getTotalCartAmount: () => number;
  addToCart: (id: string) => void;
  removeFromCart: (id: number) => void;
  checkout: (userId: string) => Promise<void>;
  addCheckoutInfo: (checkoutData: Partial<CheckoutInfoType>) => void;
  checkoutInfo: CheckoutInfo;
  clearCart: () => void;
}
