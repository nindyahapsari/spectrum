import React, { useState, useEffect, useCallback, useContext } from 'react';

import { DataSourceContext } from '../context/DataSource.context';

import { Flight } from '../@types/flight';

import InfoCard from '../components/cards/InfoCard';
import SearchBar from '../components/common/SearchBar/SearchBar';
import Flights from '../components/flights/Flights';

type ApiData<T> = T[];

function HomePage() {
  const [flights, setFlights] = useState<ApiData<Flight>>([]);
  const [filteredResults, setFilteredResults] = useState<Flight[]>([]);
  const [destinationInput, setDestinationInput] = useState<string>('');

  const initFlightsData = useContext(DataSourceContext);

  useEffect(() => {
    setFlights(initFlightsData);
  }, [initFlightsData]);

  const filterData = useCallback(function (
    apiData: ApiData<Flight>,
    query: string
  ) {
    return apiData.filter((data) =>
      data.destination?.toLowerCase().includes(query)
    );
  }, []);

  useEffect(() => {
    const query = destinationInput.trim().toLowerCase();
    const results = filterData(flights, query);

    setFilteredResults(results);
  }, [flights, destinationInput, filterData]);

  function renderContent() {
    if (destinationInput !== '' && filteredResults.length > 0) {
      return <Flights filteredResults={filteredResults} />;
    }

    if (destinationInput.trim() !== '') {
      return <p>No flights found for the specified destination</p>;
    }

    return <InfoCard />;
  }

  return (
    <div className="px-20">
      <SearchBar setDestinationInput={setDestinationInput} />

      {renderContent()}
    </div>
  );
}

export default HomePage;
