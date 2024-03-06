import React from 'react'
import './FlightsPage.css'
import SearchBar from '../components/SearchBar'

const FlightsPage = () => {
  return (
    <div>
      <h2>Flights</h2>
      <SearchBar
        onSearch={(input, category) => console.log('Search:', input, category)}
      />
      <p>This is the Flights page. You can add content here.</p>
    </div>
  )
}

export default FlightsPage
