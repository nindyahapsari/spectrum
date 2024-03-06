// eslint-disable-next-line react/prop-types
/* eslint-disable react/prop-types */
import React from 'react'
import './FlightsPage.css'
import SearchBar from '../components/SearchBar'

const FlightsPage = ({ data }) => {
  return (
    <div>
      <h2>Flights</h2>
      <SearchBar
        onSearch={(input, category) => console.log('Search:', input, category)}
      />
      <div>{data && <p>{data.destination}</p>}</div>
    </div>
  )
}

export default FlightsPage
