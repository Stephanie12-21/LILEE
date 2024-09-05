
"use client";
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import ImmobilierSection from './ImmobilierSection';
import EmploiSection from './EmploiSection';
import VoitureSection from './VoitureSection';
import MaterielSection from './MaterielSection';
import DonSection from './DonSection';
import LoisirSection from './LoisirSection';
import VetementSection from './VetementSection';

export default function App() {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.swiper.slideNext();
  };

  return (
    <>
      <div className="relative p-8">
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay, Navigation]}
          className="w-[1300px] h-[400px] rounded-[24px] shadow sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl"
        >
          <SwiperSlide className="flex items-center justify-center text-center text-lg  bg-white  shadow-lg rounded-lg">
            <div className="flex justify-center items-center">
              <ImmobilierSection/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-center text-lg bg-white shadow-lg rounded-lg">
            <div className="flex justify-center items-center">
              <EmploiSection/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-center text-lg bg-white shadow-lg rounded-lg">
            <div className="flex justify-center items-center">
              <VoitureSection/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-center text-lg bg-white shadow-lg rounded-lg">
            <div className="flex justify-center items-center">
              <MaterielSection/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-center text-lg bg-white shadow-lg rounded-lg">
          <div className="flex justify-center items-center">
              <DonSection/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-center text-lg bg-white shadow-lg rounded-lg">
          <div className="flex justify-center items-center">
              <LoisirSection/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-center text-lg bg-[#ffff] shadow-lg rounded-lg">
          <div className="flex justify-center items-center">
              <VetementSection/>
            </div>
          </SwiperSlide>
          
        </Swiper>

        {/* Boutons de navigation */}
        <button
          onClick={handlePrev}
          className="absolute left-14 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-14 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

