import React from 'react';
import SearchSection from './SearchSection';

const HomeSection = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col items-center justify-between gap-y-8">
        <h1 className="text-4xl text-center">
          Logements vérifiés aux normes PMR
        </h1>
        <p className="text-center">
          Louez, partagez, profitez de vos vacances dans toute la France. Avec nous, chaque moment de vos vacances est conçu pour être exceptionnel.
        </p>
        <SearchSection />
      </div>
    </div>
  );
};

export default HomeSection;
