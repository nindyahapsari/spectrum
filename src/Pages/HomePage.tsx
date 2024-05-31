import React, { useState } from 'react';

// import { DataSourceContext } from '../context/DataSource.context';

import { Flight } from '../types';

import SearchBar from '../components/SearchBar';
import InfoCard from '../components/InfoCard';
import Flights from '../components/Flights';

import './HomePage.css';

// searchBar need to get a context to share data between components
// src/context/DataSource.context.tsx

type ApiData<T> = T[];

function HomePage() {
  const [flights] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [destinationInput, setDestinationInput] = useState('');

  // const { initFlightsData } = useContext(DataSourceContext);

  // useEffect(() => {
  //   setFlights(initFlightsData);
  // }, [initFlightsData]);

  const filterData = (apiData: ApiData<Flight>) => {
    try {
      return apiData.filter((data) =>
        data.destination
          .trim()
          .toLowerCase()
          .includes(destinationInput.trim().toLowerCase())
      );
    } catch (error) {
      console.error('Error filtering data:', error);
      return [];
    }
  };

  const handleSearch = () => {
    if (flights.length > 0) {
      const results = filterData(flights);
      setFilteredResults(results);
    }
  };

  return (
    <div className="px-20">
      <SearchBar
        destinationInput={destinationInput}
        setFilteredResults={setFilteredResults}
        setDestinationInput={setDestinationInput}
        handleSearch={handleSearch}
      />

      {filteredResults.length > 0 ? (
        <div className=" px-40">
          <Flights filteredResults={filteredResults} />
        </div>
      ) : (
        <div className="border-1 border-yellow-900">
          <InfoCard />
        </div>
      )}
    </div>
  );
}

export default HomePage;
