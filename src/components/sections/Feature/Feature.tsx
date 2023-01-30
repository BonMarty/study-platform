import React from 'react';
import FeatureItem from '../../FeatureItem/FeatureItem';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Heading from '../../ui/Heading/Heading';

import 'swiper/css';
import 'swiper/css/navigation';

const Feature: React.FC = () => {
  const navPrevRef = React.useRef<HTMLButtonElement>(null);
  const navNextRef = React.useRef<HTMLButtonElement>(null);

  const sliderRef = React.useRef<SwiperRef>(null);

  const handlePrev = React.useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = React.useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="py-12 relative">
      <Heading title="Our featured notes" position="center" />
      <Swiper
        className="mt-12"
        modules={[Navigation]}
        navigation={{
          prevEl: navPrevRef.current,
          nextEl: navNextRef.current,
        }}
        speed={500}
        ref={sliderRef}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}>
        <SwiperSlide>
          <FeatureItem />
        </SwiperSlide>
        <SwiperSlide>
          <FeatureItem />
        </SwiperSlide>
        <SwiperSlide>
          <FeatureItem />
        </SwiperSlide>
        <SwiperSlide>
          <FeatureItem />
        </SwiperSlide>
        <SwiperSlide>
          <FeatureItem />
        </SwiperSlide>
        <SwiperSlide>
          <FeatureItem />
        </SwiperSlide>
      </Swiper>
      <div>
        <button
          className="bg-white group w-12 h-12 shadow-xl rounded-full cursor-pointer flex justify-center items-center absolute top-[53%] left-1 z-10"
          onClick={handlePrev}>
          <span className="text-4xl mb-1 text-gray-500 transition-all duration-300 group-hover:text-black">
            ⬅
          </span>
        </button>
        <button
          className="bg-white group w-12 h-12 shadow-xl rounded-full cursor-pointer flex justify-center items-center absolute top-[53%] right-1 z-10"
          onClick={handleNext}>
          <span className="text-4xl mb-1 text-gray-500 transition-all duration-300 group-hover:text-black">
            ➡
          </span>
        </button>
      </div>
    </section>
  );
};

export default Feature;
