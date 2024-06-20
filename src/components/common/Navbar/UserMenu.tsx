import { Link } from 'react-router-dom';

import NavbarLink from './NavbarLinks';

type UserMenuProps = {
  logOutUser: () => void;
  isOpen: boolean;
};

const links = [
  { to: '/', label: 'Home' },
  { to: '/comparison', label: 'Compare Tickets' },
];

function UserMenu({ logOutUser, isOpen }: UserMenuProps) {
  return (
    <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
      {links.map((link) => (
        <NavbarLink key={link.to} to={link.to} label={link.label} />
      ))}

      <Link className="hover:text-gray-500" to="/profile">
        <div> My Account</div>
      </Link>

      <Link className="hover:text-gray-500" to="/" onClick={logOutUser}>
        <div className="p-2">Logout</div>
      </Link>
    </div>
  );
}

export default UserMenu;
