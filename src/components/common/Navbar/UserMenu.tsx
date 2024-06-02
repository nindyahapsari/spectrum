import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-tailwind/react';

import NavbarLink from './NavbarLinks';

type UserMenuProps = {
  user: { name: string }; // adjust this type to match your user object
  logOutUser: () => void;
  logoSmall: string;
  isOpen: boolean;
};

const links = [
  { to: '/', label: 'Home' },
  { to: '/logout', label: 'Logout' },
  { to: '/cart', label: 'Cart' },
];

function UserMenu({ user, logOutUser, logoSmall, isOpen }: UserMenuProps) {
  return (
    <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
      {links.map((link) => (
        <NavbarLink key={link.to} to={link.to} label={link.label} />
      ))}

      <Link to="/profile">
        <div className="my-1.5 mr-5">
          <Avatar size="xs" alt="avatar" src={logoSmall} className="p-1" />
          <span>{user && user.name}</span>
        </div>
      </Link>

      <Link to="/" onClick={logOutUser}>
        <div className="p-2">Logout</div>
      </Link>
    </div>
  );
}

export default UserMenu;
