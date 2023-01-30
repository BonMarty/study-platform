import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-scroll-parallax';
import Button from '../../ui/Button/Button';

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <section className="bg-gradient-to-br from-blue-500 to-pink-500 flex items-center relative overflow-hidden px-4 after:absolute after:bg-black/30 after:top-0 after:left-0 after:w-full after:h-full">
      <Parallax speed={-30} className="flex w-full items-center justify-between z-10">
        <Parallax speed={-10} className="z-10">
          <div
            className={`${
              inView ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            } space-y-6 transition-all duration-1000 h-screen flex flex-col justify-center`}
            ref={ref}>
            <h1 className="text-white drop-shadow-xl text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-400">
                Viktoria&apos;s
              </span>{' '}
              online <br /> learning platform
            </h1>
            <p className="text-white text-xl sm:text-2xl tracking-wider drop-shadow-lg shadow-black">
              Get materials to prepare for the exam in social studies
            </p>
            <div className="w-fit">
              <Button title="Join for free" />
            </div>
          </div>
        </Parallax>
        <Image
          width={802}
          height={904}
          src="/images/hero.svg"
          alt="hero section"
          className="-scale-x-100 absolute -right-[15%] lg:-right-[10%] xl:-right-[5%] z-0 pointer-events-none"
        />
      </Parallax>
    </section>
  );
};

export default Hero;
