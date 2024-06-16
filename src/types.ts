export type FormInput = {
  departure: string;
  destination: string;
  departureDate: Date;
  returnDate: Date;
  passengers: string;
};

export type Flight = {
  _id: number;
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  airline: string;
  origin: string;
  destination: string;
  price: number;
  currency: string;
};

export type CompareTicketsContextType = {
  ticketsToCompare: Flight[] | null;
  setTicketsToCompare: React.Dispatch<React.SetStateAction<Flight[]>>;
  findFlightById: (selectedTicketId: string) => void;
  removeTicketFromCompare: (selectedTicketId: string) => void;
};

export type UserBillInfo = {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
};

export type CardPaymentInfo = {
  fullName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
};

export type CheckoutInfo = UserBillInfo & CardPaymentInfo;

export type CartItem = Flight & {
  quantity: number;
};

// export type CheckoutInfo extends UserBillInfo, CardPaymentInfo {}

export type CheckoutInfoType = Partial<
  UserBillInfo &
    CardPaymentInfo & { firstName: string; lastName: string; userName: string }
>;
export type CartContextType = {
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
};
