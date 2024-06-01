import React, { useState, useCallback } from 'react';

// import { DataSourceContext } from '../context/DataSource.context';

import { Flight } from '../types';

import SearchBar from '../components/SearchBar';
import InfoCard from '../components/InfoCard';
import Flights from '../components/Flights';

import './HomePage.css';

type ApiData<T> = T[];

function HomePage() {
  const [flights] = useState([]);
  const [filteredResults, setFilteredResults] = useState<Flight[]>([]);
  const [destinationInput, setDestinationInput] = useState<string>('');

  // const { initFlightsData } = useContext(DataSourceContext);

  // useEffect(() => {
  //   setFlights(initFlightsData);
  // }, [initFlightsData]);

  const filterData = useCallback(function (
    apiData: ApiData<Flight>,
    query: string
  ) {
    return apiData.filter((data) =>
      data.destination?.toLowerCase().includes(query)
    );
  }, []);

  const handleSearch = useCallback(
    function () {
      if (flights.length === 0) return;
      const query = destinationInput.trim().toLowerCase();
      const results = filterData(flights, query);
      setFilteredResults(results);
    },
    [flights, destinationInput, filterData]
  );

  function renderContent() {
    if (filteredResults.length > 0) {
      return <Flights filteredResults={filteredResults} />;
    }
    return <InfoCard />;
  }

  return (
    <div className="px-20">
      <SearchBar
        destinationInput={destinationInput}
        setDestinationInput={setDestinationInput}
        handleSearch={handleSearch}
      />

      {renderContent()}
    </div>
  );
}

export default HomePage;
