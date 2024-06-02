export interface Flight {
  id: number;
  flight_number: string;
  departure_time: string;
  arrival_time: string;
  airline: string;
  origin: string;
  destination: string;
  price: number;
  currency: string;
}

export interface FormInputs {
  destination: string;
  departureDate: Date | null;
  returnDate: Date | null;
  passengers: string;
  flightType: string;
}
