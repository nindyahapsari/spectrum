import { useState, useContext } from 'react';

import { CompareTicketsContextType } from '../../types';
import { CompareTicketsContext } from '../../context/CompareTickets.context';
import { DataSourceContext } from '../../context/DataSource.context';
import { Button, Toast, Alert } from 'react-daisyui';

import FlightCards from './FlightCards';

// const STOPS = ['Direct', '1 Stop', '2+ Stops'];
// const DepTimes = [
//   { type: 'Outbound', time: '12:00 AM - 11:59 PM' },
//   { type: 'Return', time: '12:00 AM - 11:59 PM' },
// ];
// const RATINGS = [
//   'Food',
//   'Service',
//   'Cleanliness',
//   'Seat Space',
//   'Security Check',
// ];

// type FlightsProps = {
//   filteredResults: Flight[];
// };

function Flights() {
  const [isTicketAdded, setIsTicketAdded] = useState(false);
  const { findFlightById } = useContext(
    CompareTicketsContext
  ) as CompareTicketsContextType;

  const { flights } = useContext(DataSourceContext);

  const handleTicketComparison = (ticketId: string) => {
    findFlightById(ticketId);

    setIsTicketAdded(true);
    setTimeout(() => {
      setIsTicketAdded(false);
    }, 3000);
  };

  return (
    <div>
      <div className="flex flex-row justify-center my-10 ">
        <div>
          {isTicketAdded && (
            <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
              <Toast>
                <Alert status="info" className="bg-blue-300 p-5 rounded-md">
                  <div>Ticket added to comparison</div>
                </Alert>
              </Toast>
            </div>
          )}
          <div></div>
          {flights.map((flight) => (
            <div key={flight.date} className="flex flex-row items-center">
              <FlightCards flight={flight} />
              <Button
                onClick={() => handleTicketComparison(flight.date)}
                className="mx-3 h-2 w-4 text-4xl"
                variant="outline"
              >
                +
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Flights;
