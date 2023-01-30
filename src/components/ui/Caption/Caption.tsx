import React from 'react';
import { Parallax } from 'react-scroll-parallax';

interface IProps {
  title: string;
}

const Caption: React.FC<IProps> = ({ title }) => {
  return (
    <section className="p-4 bg-gradient-to-b from-blue-500 to-pink-500 h-80 relative">
      <Parallax
        className="text-white text-6xl font-bold absolute bottom-52 left-2 sm:left-24 md:left-36"
        speed={-15}>
        <h1>{title}</h1>
      </Parallax>
    </section>
  );
};

export default Caption;
