/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../context/Auth.context'
import { useTheme } from '../context/ThemeContext'

import { Avatar, IconButton } from '@material-tailwind/react'
import logoSmall from '/src/assets/logo-spectrum.png'

import './Navbar.css'

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
            Spectrum
          </Link>
        </div>

        <IconButton
          size="sm"
          variant="gradient"
          className="switchdark rounded-full"
          onClick={toggleDarkMode}
        >
          {darkMode ? '☀︎' : '☾'}
        </IconButton>

        {isLoggedIn && (
          <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
            <Link to="/">
              <div className="p-2">Home</div>
            </Link>
            <Link to="/" onClick={logOutUser}>
              <div className="p-2">Logout</div>
            </Link>
            <Link to="/cart">
              <div className="p-2">Cart</div>
            </Link>
            <Link to="/profile">
              <div className="my-1.5 mr-5">
                <Avatar
                  size="xs"
                  alt="avatar"
                  src={logoSmall}
                  className="p-1"
                />
                <span>{user && user.name}</span>
              </div>
            </Link>
          </div>
        )}
        {!isLoggedIn && (
          <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
            <Link to="/signup">
              <div className="p-2">Signup</div>
            </Link>

            <Link to="/login">
              <div className="p-2">Login</div>
            </Link>
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
