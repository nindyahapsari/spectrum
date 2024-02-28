import { useState } from 'react'
import PropTypes from 'prop-types'
import './SearchBar.css'

const SearchBar = ({ data }) => {
  const [input, setInput] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [results, setResults] = useState([])

  const filterData = () => {
    try {
      return data.filter(
        (item) =>
          item.name.toLowerCase().includes(input.toLowerCase()) &&
          (selectedCategory === 'All' || item.category === selectedCategory),
      )
    } catch (error) {
      console.error('Error filtering data:', error)
      return []
    }
  }

  const handleSearch = () => {
    const filteredResults = filterData()
    setResults(filteredResults)
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

      {results.length > 0 && (
        <div className="results-container">
          <ul>
            {results.map((result) => (
              <li key={result.id}>{result.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

SearchBar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default SearchBar
