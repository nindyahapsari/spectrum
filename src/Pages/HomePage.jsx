import { useState, useContext, useEffect } from 'react'

import { DataSourceContext } from '../context/DataSource.context'

import SearchBar from '../components/SearchBar'
import FirstStep from '../components/FirstStep'
import Flights from '../components/Flights'

import './HomePage.css'

// searchBar need to get a context to share data between components

const HomePage = () => {
  const [flights, setFlights] = useState([])
  const [filteredResults, setFilteredResults] = useState([])
  const [destinationInput, setDestinationInput] = useState('')

  const { initFlightsData } = useContext(DataSourceContext)

  useEffect(() => {
    setFlights(initFlightsData)
  }, [initFlightsData])

  const handleSearch = () => {
    if (flights.length > 0) {
      const filteredResults = filterData(flights)
      // console.log(filteredResults)
      setFilteredResults(filteredResults)
    }
  }

  const filterData = (apiData) => {
    try {
      return apiData.filter((data) =>
        data.destination
          .trim()
          .toLowerCase()
          .includes(destinationInput.trim().toLowerCase()),
      )
    } catch (error) {
      console.error('Error filtering data:', error)
      return []
    }
  }

  return (
    <div className="px-20">
      <SearchBar
        destinationInput={destinationInput}
        setFilteredResults={setFilteredResults}
        setDestinationInput={setDestinationInput}
        handleSearch={handleSearch}
      />

      {filteredResults.length > 0 ? (
        <div className=" px-40">
          <Flights filteredResults={filteredResults} />
        </div>
      ) : (
        <div className="border-1 border-yellow-900">
          <FirstStep />
        </div>
      )}

    </div>
  )
}

export default HomePage
