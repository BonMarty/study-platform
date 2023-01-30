import React from 'react';

interface IProps {
  title: string;
}

const Button: React.FC<IProps> = ({ title }) => {
  return (
    <button className="bg-orange-300 w-full text-white rounded px-9 py-3 text-xl tracking-wide transition-all duration-300 hover:bg-orange-400 focus:bg-orange-400">
      {title}
    </button>
  );
};

export default Button;
