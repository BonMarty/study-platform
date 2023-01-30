import React from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckIcon from '@mui/icons-material/Check';
import Heading from '../../ui/Heading/Heading';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const Advantages: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <section className="px-4 py-12 flex flex-col md:flex-row gap-8 justify-between items-center">
      <div className="md:w-3/5">
        <div className="bg-gradient-to-tr from-violet-500 to-pink-600 w-fit p-4 rounded-full mb-6">
          <TrendingUpIcon className="text-white text-4xl" />
        </div>
        <div className="space-y-10">
          <Heading title="Learn new skills & information online" position="left" />
          <div
            className={`${
              inView ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            } space-y-4 transition-all duration-1000`}
            ref={ref}>
            <div className="flex items-center space-x-2">
              <CheckIcon className="text-emerald-500 text-3xl" />
              <p>Techniques to engage effectively with vulnerable children and young people.</p>
            </div>
            <div className="flex items-center space-x-2">
              <CheckIcon className="text-emerald-500 text-3xl" />
              <p>Join millions of people from around the world learning together.</p>
            </div>
            <div className="flex items-center space-x-2">
              <CheckIcon className="text-emerald-500 text-3xl" />
              <p>Online learning is as easy and natural.</p>
            </div>
            <div className="flex items-center space-x-2">
              <CheckIcon className="text-emerald-500 text-3xl" />
              <p>Techniques to engage effectively with vulnerable children and young people.</p>
            </div>
            <div className="flex items-center space-x-2">
              <CheckIcon className="text-emerald-500 text-3xl" />
              <p>Join millions of people from around the world learning together.</p>
            </div>
            <div className="flex items-center space-x-2">
              <CheckIcon className="text-emerald-500 text-3xl" />
              <p>Online learning is as easy and natural.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          width={600}
          height={900}
          src="/images/advantages.svg"
          alt="advantages section"
          className="static object-cover"
        />
      </div>
    </section>
  );
};

export default Advantages;
