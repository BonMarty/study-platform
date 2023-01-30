import React from 'react';

interface IProps {
  title: string;
  position: 'left' | 'center' | 'right';
}

const Heading: React.FC<IProps> = ({ title, position }) => {
  return (
    <h2
      className={`text-${position} py-1 text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-500 font-bold font-mono`}>
      {title}
    </h2>
  );
};

export default Heading;
