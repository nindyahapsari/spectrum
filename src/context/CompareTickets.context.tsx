import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Flight } from '../types';
import { DataSourceContext } from './DataSource.context';

interface CompareTicketsContextProps {
  ticketsToCompare: Flight[] | null;
  setTicketsToCompare: React.Dispatch<React.SetStateAction<Flight[] | null>>;
  findFlightById: (selectedTicketId: string) => void;
  removeTicketFromCompare: (selectedTicketId: string) => void;
  children: ReactNode;
}

const CompareTicketsContext = createContext<
  CompareTicketsContextProps | undefined
>(undefined);

const CompareTicketsProvider: React.FC = ({
  children,
}: CompareTicketsContextProps) => {
  const [ticketsToCompare, setTicketsToCompare] = useState<Flight[] | null>([]);
  const initFlightsData = useContext(DataSourceContext);

  const findFlightById = (selectedtTicketId: string) => {
    if (
      ticketsToCompare.length !== 0 &&
      ticketsToCompare.find((ticket) => ticket._id === selectedtTicketId)
    ) {
      return;
    }

    const ticket = initFlightsData.find(
      (ticket: Flight) => ticket._id.toString() === selectedtTicketId
    );
    setTicketsToCompare((prevTicketToCompare) => [
      ...prevTicketToCompare,
      ticket,
    ]);
  };

  const removeTicketFromCompare = (selectedTicketId: string) => {
    const updatedTickets = ticketsToCompare.filter(
      (ticket) => ticket._id !== selectedTicketId
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
