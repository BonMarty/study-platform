import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const SubjectItem: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <li
      className={`${
        inView ? 'opacity-100' : 'opacity-0'
      } relative transition-all duration-1000 w-full`}
      ref={ref}>
      <div className="relative w-full h-44 md:h-64">
        <Image
          fill
          sizes="100vw"
          src="/images/minion.webp"
          alt="minion"
          className="rounded object-cover"
        />
      </div>
      <div className="text-white text-2xl font-semibold absolute top-0 left-0 w-full h-full flex justify-center items-center after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-sky-600/80 after:rounded after:transition-all after:duration-500 after:opacity-0 hover:after:opacity-100">
        <p className="z-10 drop-shadow-lg shadow-black relative cursor-pointer transition-all duration-300 after:absolute after:-bottom-3 after:left-0 after:w-full after:h-[2px] after:bg-white after:rounded after:opacity-0 after:transition-all after:duration-300 hover:after:-bottom-1 hover:after:opacity-100">
          Pravo
        </p>
      </div>
    </li>
  );
};

export default SubjectItem;
