import React, { useContext } from 'react';
import { CartContext } from '../../context/Cart.context';
import firstIcon from '../../assets/airline-icon-first.png';
import secondIcon from '../../assets/airline-icon-second.png';
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
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (id) => {
    try {
      console.log('id', id);
      addToCart(id);
      // setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flight-card my-5">
      <div className="flex flex-col justify-evenly px-2">
        <TicketFlightInfo
          icon={firstIcon}
          depTimestamp={flight.departureTime}
          arrivalTimestamp={flight.arrivalTime}
          depCity="Berlin"
          destination={flight.destination}
        />
        <TicketFlightInfo
          icon={secondIcon}
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
        <div className="flex flex-row justify-between items-end ">
          <div className="text-3xl font-semibold ">${flight.price}</div>
          <div className="">
            <Button
              className="button-primary py-2 px-4 rounded-lg"
              onClick={() => handleAddToCart(flight._id)}
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightCards;
