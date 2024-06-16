import { useContext } from 'react';
import { CartContext } from '../../context/Cart.context';
import bagsIcon from '../../assets/bags.png';
import separator from '../../assets/separator.png';

import { Button } from 'react-daisyui';
import './FlightCards.css';
import TicketFlightInfo from './TicketFlightInfo';
import { Flight } from '../../types';

interface FlightCardsProps {
  flight: Partial<Flight>;
}

function FlightCards({ flight }: FlightCardsProps) {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error('CartContext must be used within a CartContextProvider');
  }

  const { addToCart } = cartContext;

  const handleAddToCart = (id: string) => {
    addToCart(id);
  };

  const formatDateTime = (datetime: string) => {
    const date = new Date(datetime);
    return date.toLocaleString();
  };

  const { _id, departure_at, return_at, origin, destination, price } = flight;

  return (
    <div className="flight-card flex flex-row justify-between my-5">
      <div className="flex flex-col justify-evenly px-2">
        <TicketFlightInfo
          depTimestamp={formatDateTime(departure_at ?? '')}
          depCity={origin ?? 'N.A'}
          destination={destination ?? 'N.A'}
        />
        <TicketFlightInfo
          depTimestamp={formatDateTime(return_at ?? '')}
          depCity={destination ?? 'N.A'}
          destination={origin ?? 'N.A'}
        />
      </div>

      <div className="mx-5">
        <img src={separator} alt="separator" />
      </div>
      <div className="flex flex-col w-3/6">
        <div className="mb-2 flex flex-row justify-between items-center gap-4"></div>
        <div className="my-8 flex justify-center">
          <img src={bagsIcon} alt="bags" />
        </div>
        <div className="flex flex-row justify-around items-end">
          <div className="text-3xl font-semibold ">€{price}</div>
          <div className="">
            <Button
              className="button-primary py-2 px-4 rounded-lg"
              onClick={() => handleAddToCart(_id ?? 'N.A')}
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
