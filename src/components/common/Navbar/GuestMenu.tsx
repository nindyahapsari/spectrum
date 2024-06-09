import NavbarLink from './NavbarLinks';

type GuestMenuProps = {
  isOpen: boolean;
};

const links = [
  { to: '/signup', label: 'Signup' },
  { to: '/login', label: 'Login' },
];

function GuestMenu({ isOpen }: GuestMenuProps) {
  return (
    <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
      {links.map((link) => (
        <NavbarLink key={link.to} to={link.to} label={link.label} />
      ))}
    </div>
  );
}

export default GuestMenu;
