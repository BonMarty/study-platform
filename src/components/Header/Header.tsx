import React from 'react';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import NavLink from '../ui/NavLink/NavLink';

const Header: React.FC = () => {
  const [activeHeader, setActiveHeader] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrollY(window.scrollY);
      setActiveHeader(true);
    } else setActiveHeader(false);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return (
    <header
      className={`${
        activeHeader ? 'shadow-2xl bg-white' : ''
      } p-4 fixed top-0 left-0 w-full h-fit z-50 transition-all duration-500`}>
      <nav className="flex justify-between items-center">
        <a
          href="#"
          className={`${
            activeHeader ? 'text-black ' : 'text-white'
          } flex items-center space-x-2 text-2xl font-medium `}>
          <ImportContactsIcon className=" w-8 h-8" />
          <span>SVK</span>
        </a>
        <ul
          className={`flex items-center space-x-3 sm:space-x-6 text-md sm:text-lg ${
            activeHeader ? 'text-black' : 'text-white'
          }`}>
          <li>
            <NavLink title="Home" active={activeHeader} href="/" />
          </li>
          <li>
            <NavLink title="Notes" active={activeHeader} href="/notes" />
          </li>
          <li>
            <NavLink title="Contact" active={activeHeader} href="/contact" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
