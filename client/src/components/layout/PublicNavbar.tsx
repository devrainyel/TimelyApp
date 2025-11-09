import { NavLink, Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Register', path: '/register' },
  { name: 'Log In', path: '/login' },
];

function Navbar() {
  return (
    <header>
      <nav>
          <Link
            to='/'
            className='logo'
          >
            Timely
          </Link>
          <ul>
            {navLinks.map((navLink) => (
              <li key={navLink.path}>
                <NavLink to={navLink.path}>{navLink.name}</NavLink>
              </li>
            ))}
          </ul>
          <RxHamburgerMenu className='ham-menu' />
      </nav>
    </header>
  );
}

export default Navbar;
