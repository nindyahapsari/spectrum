import { Link } from 'react-router-dom';

type NavbarLinkProps = {
  to: string;
  label: string;
};

function NavbarLink({ to, label }: NavbarLinkProps) {
  return (
    <Link className="hover:text-gray-500" to={to}>
      <div className="p-2">{label}</div>
    </Link>
  );
}

export default NavbarLink;
