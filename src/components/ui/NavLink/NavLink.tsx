import React from 'react';
import Link from 'next/link';

interface IProps {
  title: string;
  href: string;
  active: boolean;
}

const NavLink: React.FC<IProps> = ({ title, href, active }) => {
  return (
    <Link
      href={href ? href : '#'}
      className={`relative before:absolute before:-bottom-1 before:left-[50%] before:bg-whiite before:w-0 before:h-[2px] ${
        active ? 'before:bg-black' : 'before:bg-white'
      } before:rounded before:transition-all before:duration-300 after:absolute after:-bottom-1 after:right-[50%] ${
        active ? 'after:bg-black' : 'after:bg-white'
      } after:rounded after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:before:w-full hover:before:left-0 hover:after:w-full hover:after:right-0`}>
      {title}
    </Link>
  );
};

export default NavLink;
