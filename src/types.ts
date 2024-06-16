import { UseFormRegister } from 'react-hook-form';
import { AxiosError } from 'axios';

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

export type DataSourceContextType = {
  flights: Flight[];
  fetchFlight: (params: { [key: string]: string }) => Promise<void>;
  isLoading: boolean;
  error: AxiosError | null;
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

export type City = {
  name_translations: {
    en: string;
  };
  cases: number | null;
  country_code: string;
  code: string;
  time_zone: string;
  name: string;
  coordinates: {
    lat: number;
    lon: number;
  };
};

export type InputFieldProps<T extends City> = {
  label: string;
  placeholder: string;
  register: UseFormRegister<FormInput>;
  name: keyof FormInput;
  readOnly?: boolean;
  value?: string;
  filteredCities: T[];
  handleCities: (city: { name: string; code: string }) => void;
};
