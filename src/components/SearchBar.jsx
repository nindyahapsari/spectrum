import { useState, useEffect } from 'react'
import axios from 'axios'
import './SearchBar.css'

const URL = 'http://localhost:5005'

const SearchBar = () => {
  const [input, setInput] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [resultsFromFlightsAll, setResultsFromFlightsAll] = useState([])
  const [filteredResults, setFilteredResults] = useState([])

  useEffect(() => {
    fetchFlight()
  }, [])

  const fetchFlight = () => {
    axios
      .get(`${URL}/api/flights/all`)
      .then((response) => {
        setResultsFromFlightsAll(response.data)
      })
      .catch((error) => {
        console.log('Error =>', error)
      })
  }

  const handleSearch = () => {
    if (resultsFromFlightsAll.length > 0) {
      const filteredResults = filterData(resultsFromFlightsAll)
      setFilteredResults(filteredResults)
    }
  }

  const filterData = (apiData) => {
    try {
      let filteredResult = apiData.filter((data) => data.destination === input)
      return filteredResult
    } catch (error) {
      console.error('Error filtering data:', error)
      return []
    }
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Where to?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="search-input"
      />
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
      {filteredResults.length > 0 ? (
        <div>
          {filteredResults.map((flight, index) => (
            <div key={index}>{flight.destination}</div>
          ))}
        </div>
      ) : (
        <div className="no-results-message">No results found.</div>
      )}
    </div>
  )
}

export default SearchBar
