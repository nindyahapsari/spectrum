import { useState } from 'react'
import './LandingPage.css'

const LandingPage = () => {
  const [departure, setDeparture] = useState('')
  const [destination, setDestination] = useState('')
  const [departureDate, setDepartureDate] = useState('')
  const [returnDate, setReturnDate] = useState('')

  return (
    <div className="landing-page">
      <section className="search-section">
        <h2>Find the Best Deals on Flights</h2>
        <div className="search-box">
          <input
            type="text"
            placeholder="Departure city"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          />
          <input
            type="text"
            placeholder="Destination city"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <input
            type="date"
            placeholder="Departure date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
          <input
            type="date"
            placeholder="Return date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>
      </section>
    </div>
  )
}

export default LandingPage
