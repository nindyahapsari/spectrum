import { useContext } from 'react';
import { CompareTicketsContext } from '../context/CompareTickets.context';

import CompareTicketCard from '../components/flights/CompareTicketCard';
import { CompareTicketsContextType, Flight } from '../types';

function ComparisonPage() {
  const { ticketsToCompare } = useContext(
    CompareTicketsContext
  ) as CompareTicketsContextType;

  return (
    <div className="p-4 flex flex-col justify-center">
      <div className="text-center text-2xl font-bold my-20">
        Compare your flights
      </div>
      <div className="my-5 flex flex-row flex-wrap justify-center">
        {ticketsToCompare?.map(
          ({ _id, airline, city, flight_number, price }: Flight) => (
            <CompareTicketCard
              key={_id}
              id={_id ?? 'N.A'}
              airline={airline ?? 'N.A'}
              city={city ?? 'N.A'}
              flightNumber={flight_number ?? 'N.A'}
              price={price}
            />
          )
        )}
      </div>
    </div>
  );
}

export default ComparisonPage;
