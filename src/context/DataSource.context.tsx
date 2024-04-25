import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { FLIGHTS_ALL_API } from '../utility/endpoints';

const fetchAllFlights = async () => {
  const response = await axios.get(FLIGHTS_ALL_API);
  const returnedData = response.data;
  return returnedData;
};

const DataSourceContext = createContext(null);

function DataSourceProvider(props) {
  const [initFlightsData, setInitFlightData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllFlights();
      setInitFlightData(data);
    };

    fetchData();
  }, []);

  const contextValue = {
    initFlightsData,
  };

  return (
    <DataSourceContext.Provider value={contextValue}>
      {props.children}
    </DataSourceContext.Provider>
  );
}

export { DataSourceContext, DataSourceProvider };
