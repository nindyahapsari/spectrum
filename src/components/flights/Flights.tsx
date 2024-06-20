import { useState, useContext } from 'react';

import { CompareTicketsContextType } from '../../types';
import { CompareTicketsContext } from '../../context/CompareTickets.context';
import { DataSourceContext } from '../../context/DataSource.context';
import { Button, Toast, Alert } from 'react-daisyui';
import Pagination from '../common/Pagination';

import FlightCards from './FlightCards';

function Flights() {
  const [isTicketAdded, setIsTicketAdded] = useState(false);
  const { findFlightById } = useContext(
    CompareTicketsContext
  ) as CompareTicketsContextType;

  const { allFlights, isLoading, currentPage, setCurrentPage, totalPages } =
    useContext(DataSourceContext);

  const handleTicketComparison = (ticketId: string) => {
    findFlightById(ticketId);

    setIsTicketAdded(true);
    setTimeout(() => {
      setIsTicketAdded(false);
    }, 3000);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * 10;
  const endIndex = startIndex + 10;
  const currentFlights = allFlights.flights.slice(startIndex, endIndex);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <div className="flex flex-row justify-center">
          <div className="text-2xl font-semibold">
            Departure City: {allFlights.departure}
          </div>
        </div>
      </div>
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
          <div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
          {currentFlights.map((flight) => (
            <div key={flight._id} className="flex flex-row items-center">
              <FlightCards flight={flight} />
              <Button
                onClick={() => handleTicketComparison(flight._id)}
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
