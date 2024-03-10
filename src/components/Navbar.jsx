/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

import { AuthContext } from '../context/Auth.context'
import { useTheme } from './ThemeContext'

import { Avatar, IconButton } from '@material-tailwind/react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext)
  const { darkMode, toggleDarkMode } = useTheme()

  const navigate = useNavigate()

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
        <div>
          <IconButton
            variant="gradient"
            className="switchdark rounded-full"
            onClick={toggleDarkMode}
          >
            {darkMode ? '☀︎' : '☾'}
          </IconButton>
        </div>
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
              <div>
                <Avatar
                  size="sm"
                  alt="avatar"
                  src="https://docs.material-tailwind.com/img/face-2.jpg"
                  className="mx-2 border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
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
