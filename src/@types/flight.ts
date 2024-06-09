export interface Flight {
  _id: number;
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  airline: string;
  origin: string;
  destination: string;
  price: number;
  currency: string;
}
