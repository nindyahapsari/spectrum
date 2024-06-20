import { UseFormRegister } from 'react-hook-form';
import { AxiosError } from 'axios';

export type FormInput = {
  departure: string;
  searchType?: string;
};

export type Flight = {
  _id: string;
  date?: string;
  city?: string;
  flight_number: string;
  departure_at: string;
  return_at?: string;
  airline?: string;
  origin: string;
  destination?: string;
  price: number;
  transfers?: number;
};

export type FetchCheapestFlightsInfo = {
  departure: string;
  flights: CheapestFlightFormated[];
};

export type DataSourceContextType = {
  allFlights: FetchCheapestFlightsInfo;
  fetchCheapestFlight: (params: { [key: string]: string }) => Promise<void>;
  isLoading: boolean;
  error: AxiosError | null;
  cities: CityCodeName;
  airlines: AirlineCodeName;
  isDataLoaded: boolean;
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
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
  cart: { [key: string]: number };
  getCartItems: () => CartItem[];
  getTotalCartAmount: () => number;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  checkout: (userId: string) => Promise<void>;
  addCheckoutInfo: (checkoutData: Partial<CheckoutInfoType>) => void;
  checkoutInfo: CheckoutInfo;
  clearCart: () => void;
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

export type City = {
  name_translations: {
    en: string;
  };
  cases: {
    su: string;
  };
  country_code: string;
  code: string;
  time_zone: string;
  name: string;
  coordinates: {
    lat: number;
    lon: number;
  };
};

export type CityCodeName = {
  [key: string]: string;
};

export type AirlineCodeName = {
  [key: string]: string;
};

export type Airline = {
  name_translations: {
    en: string;
  };
  code: string;
  is_lowcost: boolean;
  name: string | null;
};

export type CheapestFlight = {
  [key: string]: {
    [key: string]: {
      airline: string;
      departure_at: string;
      return_at: string;
      expires_at: string;
      price: number;
      flight_number: number;
    };
  };
};

export type CheapestFlightFormated = {
  _id: string;
  city: string;
  flight_id: string;
  airline: string;
  departure_at: string;
  return_at: string;
  price: number;
  flight_number: string;
  date: string;
  origin: string;
};
