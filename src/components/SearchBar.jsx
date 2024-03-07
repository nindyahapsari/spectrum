import React, { useState } from 'react'
import './SearchBar.css'
import DatePicker from 'react-date-picker'
import 'react-calendar/dist/Calendar.css'
import 'react-date-picker/dist/DatePicker.css'

const SearchBar = ({ destinationInput, setDestinationInput, handleSearch }) => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [date, setDate] = useState(new Date())

  const handleDestination = (e) => {
    setDestinationInput(e.target.value)
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  return (
    <div className="search-container">
      <div className="search-input-container">
        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="From where?"
            value="Berlin"
            readOnly
            className="search-input"
          />
          <input
            type="text"
            placeholder="Where to?"
            value={destinationInput}
            onChange={handleDestination}
            className="search-input"
          />
          <div className="date-picker-container">
            <DatePicker
              className="date"
              selected={date}
              onChange={(date) => setDate(date)}
            />
            <DatePicker
              className="date"
              selected={date}
              onChange={(date) => setDate(date)}
            />
          </div>
        </div>
      </div>
      <div className="additional-options">
        <div className="checkbox-container">
          <label className="label">
            One Way
            <input type="checkbox" />
          </label>
          <label className="label">
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
    </div>
  )
}

export default SearchBar
