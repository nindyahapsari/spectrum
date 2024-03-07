import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/cart.context'
import SearchBar from '../components/SearchBar'
import FlightCards from '../components/FlightCards'

import './FlightsPage.css'

const FlightsPage = () => {
  const [flights, setFlights] = useState([])
  const { initData } = useContext(CartContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setFlights(initData)
        // console.log(initData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [initData])

  //temp loader
  if (flights.length === 0) {
    return <div className="flight-loader">Loading...</div>
  }

  return (
    <div>
      <SearchBar />

      <div className="flight-list-container">
        {flights &&
          flights.map((flight) => {
            return <FlightCards key={flight._id} flight={flight} />
          })}
      </div>
    </div>
  )
}

export default FlightsPage
