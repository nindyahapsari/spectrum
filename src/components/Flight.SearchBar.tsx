import React, { useState } from 'react'
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const handleSearch = () => {
    onSearch(input, selectedCategory)
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  return (
    <div className="search-container">
      <div className="search-bar">
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
      </div>

      <div className="dates"></div>
      <div className="departure-arrive"></div>
      <div className="conditions"></div>
      <div className="passengers-class"></div>
    </div>
  )
}

export default SearchBar
