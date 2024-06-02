/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../context/Auth.context';
import GuestMenu from './GuestMenu';
import UserMenu from './UserMenu';

import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link className="logo" to="/">
            Spectrum
          </Link>
        </div>

        {isLoggedIn && <UserMenu logOutUser={logOutUser} isOpen={isOpen} />}
        {!isLoggedIn && <GuestMenu isOpen={isOpen} />}

        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
