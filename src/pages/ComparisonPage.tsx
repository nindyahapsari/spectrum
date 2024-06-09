import { useContext } from 'react';
import { CompareTicketsContext } from '../context/CompareTickets.context';

import CompareTicketCard from '../components/flights/CompareTicketCard';

interface ComparisonCardProps {
  _id: string;
  airline: string;
  destination: string;
  seatAvailability?: number;
  price: number;
}

function ComparisonPage() {
  const { ticketsToCompare } = useContext(CompareTicketsContext);

  return (
    <div className="p-4 flex flex-col justify-center">
      <div className="text-center text-2xl font-bold my-20">
        Compare your tickets
      </div>
      <div className="my-5 flex flex-row flex-wrap justify-center">
        {ticketsToCompare.map(
          ({
            _id,
            airline,
            destination,
            seatAvailability,
            price,
          }: ComparisonCardProps) => (
            <CompareTicketCard
              key={_id}
              id={_id}
              airline={airline}
              destination={destination}
              seatAvailability={seatAvailability}
              price={price}
            />
          )
        )}
      </div>
    </div>
  );
}

export default ComparisonPage;
