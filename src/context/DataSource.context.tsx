import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { Flight } from '../types';
import { FLIGHTS_ALL_API } from '../utils/endpoints';

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

const DataSourceContext = createContext<Flight[]>([]);

function DataSourceProvider({ children }: TDataSourceProvider) {
  const [initFlightsData, setInitFlightData] = useState<Flight[]>([]);

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
