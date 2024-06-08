import React, { useContext } from 'react';
import { CartContext } from '../../context/Cart.context';
import { CompareTicketsContext } from '../../context/CompareTickets.context';

import { Card, Button } from 'react-daisyui';

interface CompareTicketCardProps {
  id: string;
  airline: string;
  destination: string;
  seatAvailability?: number;
  price: number;
}

function CompareTicketCard({
  id,
  airline,
  destination,
  seatAvailability,
  price,
}: CompareTicketCardProps) {
  const { addToCart } = useContext(CartContext);
  const { removeTicketFromCompare } = useContext(CompareTicketsContext);

  const handleAddToCart = (id: string) => {
    try {
      addToCart(id);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleRemoveCard = (id: string) => {
    try {
      removeTicketFromCompare(id);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Card className="w-72 h-auto mx-3 my-5 border border-black rounded-lg overflow-hidden">
      <Card.Title className="bg-spectrum-primary px-4 py-3 text-center text-lg font-bold">
        {airline}
      </Card.Title>
      <Card.Body className="p-5">
        <div className="py-2">Airline: {airline}</div>
        <div className="py-2">Destination: {destination}</div>
        <div className="py-2">Seat: {seatAvailability}</div>
        <div className="py-2 text-lg">Price: ${price}</div>
      </Card.Body>
      <div className="flex flex-col justify-between my-10">
        <Button onClick={() => handleRemoveCard(id)} className="text-md">
          Remove
        </Button>
        <Button onClick={() => handleAddToCart(id)} className="text-xl my-1">
          Book Flight
        </Button>
      </div>
    </Card>
  );
}

export default CompareTicketCard;
