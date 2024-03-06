import axios from 'axios'
import { useState, useEffect } from 'react'
import './FlightCards.css'

const FlightCards = () => {
  const [flights, setFlights] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5005/api/flights/all`,
        )
        setFlights(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>Flight Search Results</h1>
      {flights.map((flight) => (
        <div key={flight._id} className="flight-card">
          <div className="flight-card-content">
            <h2>{flight.airline}</h2>
            <p>Flight Number: {flight.flightNumber}</p>
            <p className="small-bold">Departure:</p>
            <p className="small-bold">
              Time of Departure:{' '}
              {new Date(flight.departureTime).toLocaleString()}
            </p>
            <p className="small-bold">Destination:</p>
            <p className="small-bold">
              Arrival Time: {new Date(flight.arrivalTime).toLocaleString()}
            </p>
          </div>
          <p className="flight-card-price">Price: ${flight.price}</p>
          <button onClick={() => flight._id}>Book Now</button>
        </div>
      ))}
    </div>
  )
}

export default FlightCards
