import React from 'react';
import SearchSection from './SearchSection';

const HomeSection = () => {
  return (
    <div className="container mx-auto py-20 w-[620px]">
      <div className="flex flex-col items-center justify-between gap-y-10">
        <h1 className="text-6xl text-center">
          Logements vérifiés aux normes PMR
        </h1>
        <p className="text-center text-lg">
          Louez, partagez, profitez de vos vacances dans toute la France. Avec nous, chaque moment de vos vacances est conçu pour être exceptionnel.
        </p>
        <SearchSection />
      </div>
    </div>
  );
};

export default HomeSection;
