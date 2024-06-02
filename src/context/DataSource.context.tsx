import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { FLIGHTS_ALL_API } from '../utils/endpoints';

interface Flight {
  id: number;
  flight_number: string;
  departure_time: string;
  arrival_time: string;
  airline: string;
  origin: string;
  destination: string;
  price: number;
  currency: string;
}

type TDataSourceProvider = {
  children: React.ReactNode;
};

function fetchAllFlights(): Promise<Flight[]> {
  return axios
    .get(FLIGHTS_ALL_API)
    .then((response) => {
      const returnedData = response.data;
      return returnedData;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
}

const DataSourceContext = createContext<Flight[] | null>(null);

function DataSourceProvider({ children }: TDataSourceProvider) {
  const [initFlightsData, setInitFlightData] = useState<Flight[] | null>(null);

  useEffect(() => {
    function fetchData() {
      fetchAllFlights().then((data) => {
        setInitFlightData(data);
      });
    }

    fetchData();
  }, []);

  return (
    <DataSourceContext.Provider value={initFlightsData}>
      {children}
    </DataSourceContext.Provider>
  );
}

export { DataSourceContext, DataSourceProvider };
