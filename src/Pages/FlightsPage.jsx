import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useContext } from 'react'
import { CartContext } from '../context/cart.context'
import SearchBar from '../components/SearchBar'
import FlightCards from '../components/FlightCards'

import './FlightsPage.css'

const FlightsPage = () => {
  const { initData } = useContext(CartContext)

  const [flights, setFlights] = useState([])
  const [filteredResults, setFilteredResults] = useState([])
  const [destinationInput, setDestinationInput] = useState('')

  let navigateTo = useNavigate()
  console.log(navigateTo)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setFlights(initData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [initData])

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

  const handleSearch = () => {
    navigateTo('/flights')
    if (flights.length > 0) {
      const filteredResults = filterData(initData)
      console.log(filteredResults)
      setFilteredResults(filteredResults)
    }
  }

  const renderFlightsList = () => {
    const flightsList = filteredResults.length > 0 ? filteredResults : flights
    return flightsList.map((flight) => (
      <FlightCards key={flight._id} flight={flight} />
    ))
  }

  if (flights.length === 0) {
    return <div className="flight-loader">Loading...</div>
  }

  return (
    <div>
      <SearchBar
        destinationInput={destinationInput}
        setDestinationInput={setDestinationInput}
        handleSearch={handleSearch}
      />

      <div className="flight-list-container">{renderFlightsList()}</div>
    </div>
  )
}

export default FlightsPage
