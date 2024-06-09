import { useContext } from 'react';
import { CartContext } from '../../context/Cart.context';
import { Card } from 'react-daisyui';

import { Flight } from '../../@types/flight';
import { CartContextType } from '../../@types/cartContext';

interface CardCheckoutItemProps {
  flight: Flight;
}

function CardCheckoutItem({ flight }: CardCheckoutItemProps) {
  const { removeFromCart } = useContext(CartContext) as CartContextType;
  return (
    <div className="card bg-base-100 shadow-xl mb-4 p-4 rounded-lg">
      <Card className="flex justify-between items-center ">
        <Card.Title className="text-3xl font-bold my-5">
          {flight.airline}
        </Card.Title>
        <div className="w-full flex flex-row justify-between">
          <Card.Body>
            <p className="text-2xl my-3">
              Flight Number: {flight.flightNumber}
            </p>
            <p className="text-2xl my-3">
              Departure: {new Date(flight.departureTime).toLocaleString()}
            </p>
            <p className="text-2xl my-3">Destination: {flight.destination}</p>
            <p className="text-2xl my-3">
              Arrival: {new Date(flight.arrivalTime).toLocaleString()}
            </p>
          </Card.Body>
          <div className="flex flex-col justify-center items-center">
            <p className="px-5 text-lg font-semibold">Price: ${flight.price}</p>
            <button
              className="btn btn-error"
              onClick={() => removeFromCart(flight._id)}
            >
              Remove
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default CardCheckoutItem;
