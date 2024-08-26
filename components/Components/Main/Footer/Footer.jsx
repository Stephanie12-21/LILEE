import React from 'react';
import MenuFooter from './MenuFooter';
import SideFooter from './SideFooter';

const Footer = () => {
  return (
    <div className='bg-slate-500 flex flex-col items-center'>

      <div className='flex justify-between w-full'>
        <div className='mx-auto px-auto mt-5 bg-red-700'>
          <SideFooter />
        </div>
        <div className='mx-auto px-auto mt-5 bg-green-800'>
          <MenuFooter />
        </div>
      </div>

      
      <div className='mt-auto py-4 text-center'>
        © 2024 made by <span> Stéphanie MAMINIAINA </span>
      </div>
    </div>
  );
};

export default Footer;
