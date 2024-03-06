import { useContext } from 'react'
import { CartContext } from '../context/cart.context'
import './FlightCards.css'

const FlightCards = ({ flight }) => {
  const { addToCart } = useContext(CartContext)
  return (
    <div className="flight-card">
      <div className="flight-card-content">
        <h2>{flight.airline}</h2>
        <p>Flight Number: {flight.flightNumber}</p>
        <p className="small-bold">Departure:</p>
        <p className="small-bold">
          Time of Departure: {new Date(flight.departureTime).toLocaleString()}
        </p>
        <p className="small-bold">Destination: {flight.destination}</p>
        <p className="small-bold">
          Arrival Time: {new Date(flight.arrivalTime).toLocaleString()}
        </p>
      </div>
      <p className="flight-card-price">Price: ${flight.price}</p>
      <button
        className="flight-card-button"
        onClick={() => addToCart(flight._id)}
      >
        Book Now
      </button>
    </div>
  )
}

export default FlightCards
