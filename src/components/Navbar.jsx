/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { AuthContext } from '../context/Auth.context'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link className="logo" to="/">
            PlaneWreck
          </Link>
        </div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/">Home</Link>
          <a href="/flights">Flights</a>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
          <Link to="/cart">Checkout</Link>

          {/* <Link onClick={logOutUser}>Logout</Link> */}
          {/* <span>{user && user.name}</span> */}
        </div>

        {isLoggedIn && (
          <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
            <Link to="/">Home</Link>
            <Link to="/flights">Flights</Link>
            <Link onClick={logOutUser}>Logout</Link>
            <span>{user && user.name}</span>
          </div>
        )}
        {!isLoggedIn && (
          <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </div>
        )}

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
