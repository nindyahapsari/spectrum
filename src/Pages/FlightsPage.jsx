import React from 'react'
import './FlightsPage.css'
import SearchBar from '../components/SearchBar'
import FlightCards from '../components/FlightCards'

const FlightsPage = () => {
  return (
    <div>
      <h2>Flights</h2>
      <SearchBar
        onSearch={(input, category) => console.log('Search:', input, category)}
      />
      <FlightCards />
    </div>
  )
}

export default FlightsPage
