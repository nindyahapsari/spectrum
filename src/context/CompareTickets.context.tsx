import { createContext, useState, ReactNode, useContext } from 'react';
import { Flight, CompareTicketsContextType } from '../types';
import { DataSourceContext } from './DataSource.context';

type CompareTicketsProviderProps = {
  children: ReactNode;
};

const CompareTicketsContext = createContext<
  CompareTicketsContextType | undefined
>(undefined);

const CompareTicketsProvider = ({ children }: CompareTicketsProviderProps) => {
  const [ticketsToCompare, setTicketsToCompare] = useState<Flight[]>([]);

  const {
    allFlights: { flights },
  } = useContext(DataSourceContext);

  const findFlightById = (selectedtTicketId: string) => {
    if (
      ticketsToCompare.length !== 0 &&
      ticketsToCompare.find(
        (ticket) => ticket._id.toString() === selectedtTicketId
      )
    ) {
      return;
    }

    const flightToCompare = flights.find(
      (flight: Flight) => flight._id.toString() === selectedtTicketId
    );
    if (flightToCompare)
      setTicketsToCompare((prevTicket) => [...prevTicket, flightToCompare]);
  };

  const removeTicketFromCompare = (selectedTicketId: string) => {
    const updatedTickets = ticketsToCompare.filter(
      (ticket) => ticket._id.toString() !== selectedTicketId
    );
    setTicketsToCompare(updatedTickets);
  };

  return (
    <CompareTicketsContext.Provider
      value={{
        ticketsToCompare,
        setTicketsToCompare,
        findFlightById,
        removeTicketFromCompare,
      }}
    >
      {children}
    </CompareTicketsContext.Provider>
  );
};

export { CompareTicketsContext, CompareTicketsProvider };
