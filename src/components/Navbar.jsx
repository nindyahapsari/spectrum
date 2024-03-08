/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

import { AuthContext } from '../context/Auth.context'
import { useTheme } from './ThemeContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext)
  const { darkMode, toggleDarkMode } = useTheme()

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link className="logo" to="/">
            PlaneWreck
          </Link>
        </div>
        <button className="switchdark" onClick={toggleDarkMode}>
          {darkMode ? '☀︎' : '☾'}
        </button>
        {isLoggedIn && (
          <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
            <Link to="/">Home</Link>
            <Link onClick={logOutUser}>Logout</Link>
            <Link to="/cart">
              <span>{user && user.name}</span>
            </Link>
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
