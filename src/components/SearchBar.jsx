import React, { useState } from 'react'
import './SearchBar.css'

const SearchBar = () => {
  const [input, setInput] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [results, setResults] = useState([])

  const handleSearch = () => {
    // const filteredResults = data.filter(
    //   (item) =>
    //     item.name.toLowerCase().includes(input.toLowerCase()) &&
    //     (selectedCategory === 'All' || item.category === selectedCategory),
    // )
    // setResults(filteredResults)
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Type to search..."
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
        <option value="Category1">Category 1</option>
        <option value="Category2">Category 2</option>
      </select>

      <button onClick={handleSearch} className="search-button">
        Search
      </button>

      {results.length > 0 && (
        <div className="results-container">
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default SearchBar
