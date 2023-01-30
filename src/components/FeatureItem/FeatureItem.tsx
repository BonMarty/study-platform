import { Rate } from 'antd';
import React from 'react';
import Button from '../ui/Button/Button';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const FeatureItem: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <li
      className={`mx-4 mb-12 w-auto flex flex-col shadow-xl pb-4 transition-all duration-1000 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-28 opacity-0'
      }`}
      ref={ref}>
      <div className="relative w-full h-48 rounded-t mb-6">
        <Image
          fill
          sizes="100vw"
          src="/images/minion.webp"
          alt="minion"
          className="rounded-t mb-4 object-cover"
        />
      </div>

      <div className="flex flex-col px-4 space-y-4">
        <p className="text-gray-400 text-lg">Pravo</p>
        <h3 className="text-xl font-medium uppercase">Fundamental of pravo</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, pariatur. Unde dolor
          excepturi voluptate fuga ipsam est reiciendis odit consequuntur!
        </p>
        <p className="text-gray-600">06.06.2006</p>
        <Rate allowHalf={true} defaultValue={5} disabled={true} className="pointer-events-none" />
        <Button title="Find out more" />
      </div>
    </li>
  );
};

export default FeatureItem;
