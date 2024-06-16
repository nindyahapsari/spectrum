import { createContext, useState, ReactNode } from 'react';
import { Flight, CompareTicketsContextType } from '../types';

interface CompareTicketsProviderProps {
  children: ReactNode;
}

const CompareTicketsContext = createContext<
  CompareTicketsContextType | undefined
>(undefined);

const CompareTicketsProvider = ({ children }: CompareTicketsProviderProps) => {
  const [ticketsToCompare, setTicketsToCompare] = useState<Flight[]>([]);

  const findFlightById = (selectedtTicketId: string) => {
    if (
      ticketsToCompare.length !== 0 &&
      ticketsToCompare.find(
        (ticket) => ticket._id.toString() === selectedtTicketId
      )
    ) {
      return;
    }

    // const ticket = initFlightsData.find(
    //   (ticket: Flight) => ticket._id.toString() === selectedtTicketId
    // );
    // if (ticket) setTicketsToCompare((prevTicket) => [...prevTicket, ticket]);
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
