import { useState, useContext } from 'react'

import { DataSourceContext } from '../context/DataSource.context'
import SearchBar from '../components/SearchBar'
import FlightCards from '../components/FlightCards'

import './FlightsPage.css'

const FlightsPage = () => {
  const [filteredResults, setFilteredResults] = useState([])

  const { initFlightsData } = useContext(DataSourceContext)

  const renderFlightsList = () => {
    const flightsList =
      filteredResults.length > 0 ? filteredResults : initFlightsData

    console.log('flightsList', flightsList)
    return flightsList.map((flight) => (
      <FlightCards key={flight._id} flight={flight} />
    ))
  }

  if (initFlightsData.length === 0) {
    return <div className="flight-loader">Loading...</div>
  }

  return (
    <div>
      <SearchBar setFilteredResults={setFilteredResults} />

      <div className="flight-list-container">{renderFlightsList()}</div>
    </div>
  )
}

export default FlightsPage
