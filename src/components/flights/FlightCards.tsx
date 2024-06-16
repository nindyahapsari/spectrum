import { useContext } from 'react';
import { CartContext } from '../../context/Cart.context';
import bagsIcon from '../../assets/bags.png';
import separator from '../../assets/separator.png';

import { Button } from 'react-daisyui';
import './FlightCards.css';
import TicketFlightInfo from './TicketFlightInfo';
import { Flight } from '../../types';

interface FlightCardsProps {
  flight: Flight;
  // setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  // setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  // setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

function FlightCards({ flight }: FlightCardsProps) {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error('CartContext must be used within a CartContextProvider');
  }

  const { addToCart } = cartContext;

  const handleAddToCart = (id: number) => {
    const flightId = id.toString();
    addToCart(flightId);
  };

  return (
    <div className="flight-card my-5">
      <div className="flex flex-col justify-evenly px-2">
        <TicketFlightInfo
          depTimestamp={flight.departureTime}
          arrivalTimestamp={flight.arrivalTime}
          depCity="Berlin"
          destination={flight.destination}
        />
        <TicketFlightInfo
          depTimestamp={flight.arrivalTime}
          arrivalTimestamp={flight.departureTime}
          depCity={flight.destination}
          destination="Berlin"
        />
      </div>

      <div className="mx-5">
        <img src={separator} alt="separator" />
      </div>
      <div className="flex flex-col w-1/3 ">
        <div className="mb-2 flex flex-row justify-between items-center gap-4"></div>
        <div className="my-8 flex justify-center">
          <img src={bagsIcon} alt="bags" />
        </div>
        <div className="flex flex-row justify-between items-end">
          <div className="text-3xl font-semibold ">${flight.price}</div>
          <div className="">
            <Button
              className="button-primary py-2 px-4 rounded-lg"
              onClick={() => handleAddToCart(flight._id)}
            >
              Book Flight
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightCards;
