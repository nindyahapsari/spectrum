// SearchBar.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchBar.css';
import Flights from '../Pages/FlightsPage';
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css';
import 'react-date-picker/dist/DatePicker.css';

const URL = 'http://localhost:5005';

const SearchBar = () => {
  const [fromWhereInput, setFromWhereInput] = useState('');
  const [toWhereInput, setToWhereInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [resultsFromFlightsAll, setResultsFromFlightsAll] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    fetchFlight();
  }, []);

  const fetchFlight = () => {
    axios
      .get(`${URL}/api/flights/all`)
      .then((response) => {
        console.log('Response =>', response);
        setResultsFromFlightsAll(response.data);
      })
      .catch((error) => {
        console.log('Error =>', error);
      });
  };

  const handleSearch = () => {
    if (resultsFromFlightsAll.length > 0) {
      const filteredResults = filterData(resultsFromFlightsAll);
      setFilteredResults(filteredResults);
    }
  };

  const filterData = (apiData) => {
    try {
      return apiData.filter(
        (item) =>
          (item.airline?.toLowerCase() ?? '').includes(
            fromWhereInput.toLowerCase()
          ) &&
          (selectedCategory === 'All' || item.destination === toWhereInput)
      );
    } catch (error) {
      console.error('Error filtering data:', error);
      return [];
    }
  };

  console.log('From where input =>', fromWhereInput);
  console.log('Where to input =>', toWhereInput);

  const handleFromWhereChange = (e) => {
    setFromWhereInput(e.target.value);
  };

  const handleToWhereChange = (e) => {
    setToWhereInput(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  console.log('Filtered results =>', filteredResults);

  return (
    <div className="search-container">
      <div className="search-input-container">
        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="From where?"
            value={fromWhereInput}
            onChange={handleFromWhereChange}
            className="search-input"
          />
          <input
            type="text"
            placeholder="Where to?"
            value={toWhereInput}
            onChange={handleToWhereChange}
            className="search-input"
          />
          <DatePicker
            className="date"
            selected={date}
            onChange={(date) => setDate(date)}
          />
        </div>
      </div>
      <div className="additional-options">
        <div className="checkbox-container">
          <label>
            One Way
            <input type="checkbox" />
          </label>
          <label>
            Return
            <input type="checkbox" />
          </label>
        </div>
        <div className="category-and-button">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="category-dropdown"
          >
            <option value="All">All Categories</option>
          </select>
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>
      </div>
      {filteredResults.length > 0 ? (
        <div>
          {filteredResults.map((flights, index) => (
            <Flights
              key={`${flights.destination}-${index}`}
              {...flights}
            />
          ))}
        </div>
      ) : (
        <div className="no-results-message"></div>
      )}
    </div>
  );
};

export default SearchBar;
