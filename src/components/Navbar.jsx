import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link className="logo" to="/">PlaneWreck</Link>
        </div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/">Home</Link>
          <a href="#flights">Flights</a>
          <a href="#hotels">Hotels</a>
          <a href="#cars">Cars</a>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
