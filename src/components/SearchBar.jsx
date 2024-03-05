import { useState } from 'react'
import axios from 'axios'
import './SearchBar.css'
import PropTypes from 'prop-types'
import Flights from '../Pages/FlightsPage'

const URL = 'http://localhost:5005'

const SearchBar = () => {
  const [input, setInput] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [results, setResults] = useState([])

  const filterData = (apiData) => {
    try {
      return apiData.filter(
        (item) =>
          item.airline.toLowerCase().includes(input.toLowerCase()) &&
          (selectedCategory === 'All' || item.destination === selectedCategory),
      )
    } catch (error) {
      console.error('Error filtering data:', error)
      return []
    }
  }

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${URL}/api/flights/all`)
      const apiData = response.data
      const filteredResults = filterData(apiData)
      setResults(filteredResults)
    } catch (error) {
      console.error('Error fetching data:', error)
      setResults([])
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

      {results.length > 0 ? (
        <Flights flights={results} />
      ) : (
        <div className="no-results-message">No results found.</div>
      )}
    </div>
  )
}

SearchBar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      airline: PropTypes.string.isRequired,
      destination: PropTypes.string.isRequired,
      departureTime: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default SearchBar
