import { useState } from 'react'
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
          <span>PlaneWreck</span>
        </div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="#home">Home</a>
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
