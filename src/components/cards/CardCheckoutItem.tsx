/*
import { useContext } from 'react';
import { CartContext } from '../../context/Cart.context';
import { Card } from 'react-daisyui';

import { Flight, CartContextType } from '../../types';

interface CardCheckoutItemProps {
  flight: Flight;
}

function CardCheckoutItem({ flight }: CardCheckoutItemProps) {
  const { removeFromCart } = useContext(CartContext) as CartContextType;
  const { _id, airline, flight_number, departure_at, transfers, destination } =
    flight;
  return (
    <div className="card bg-base-100 shadow-xl mb-4 p-4 rounded-lg">
      <Card className="flex justify-between items-center ">
        <Card.Title className="text-3xl font-bold my-5">{airline}</Card.Title>
        <div className="w-full flex flex-row justify-between">
          <Card.Body>
            <p className="text-2xl my-3">Flight Number: {flight_number}</p>
            <p className="text-2xl my-3">
              Departure: {new Date(departure_at).toLocaleString()}
            </p>
            <p className="text-2xl my-3">Destination: {destination}</p>
            <p className="text-2xl my-3">
              Transit: {transfers ?? 0 > 0 ? 'Yes' : 'No'}
            </p>
          </Card.Body>
          <div className="flex flex-col justify-center items-center">
            <p className="px-5 text-lg font-semibold">Price: ${flight.price}</p>
            <button
              className="btn btn-error"
              onClick={() => removeFromCart(_id)}
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
*/
