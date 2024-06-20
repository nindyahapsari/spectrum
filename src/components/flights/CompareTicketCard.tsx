import { useContext } from 'react';
import { CompareTicketsContext } from '../../context/CompareTickets.context';
import { CompareTicketsContextType } from '../../types';

import { Card, Button } from 'react-daisyui';

type CompareTicketCardProps = {
  id: string;
  airline: string;
  city?: string;
  flightNumber?: string;
  price: number;
};

function CompareTicketCard({
  id,
  airline,
  city,
  flightNumber,
  price,
}: CompareTicketCardProps) {
  const { removeTicketFromCompare } = useContext(
    CompareTicketsContext
  ) as CompareTicketsContextType;

  const handleRemoveCard = (id: string) => {
    removeTicketFromCompare(id);
  };

  return (
    <Card className="w-72 h-auto mx-3 my-5 border border-black rounded-lg overflow-hidden">
      <Card.Title className="bg-spectrum-primary px-4 py-3 text-center text-lg font-bold">
        {airline}
      </Card.Title>
      <Card.Body className="p-5">
        <div className="py-2">City: {city}</div>
        <div className="py-2">Flight number: {flightNumber}</div>
        <div className="py-2 text-lg">Price: ${price}</div>
      </Card.Body>
      <div className="flex flex-col justify-center">
        <Button onClick={() => handleRemoveCard(id)} className="text-md">
          Remove
        </Button>
      </div>
    </Card>
  );
}

export default CompareTicketCard;
