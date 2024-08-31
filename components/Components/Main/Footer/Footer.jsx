import React from 'react';
import MenuFooter from './MenuFooter';
import SideFooter from './SideFooter';

const Footer = () => {
  return (
    <div className='bg-[#15213D] flex flex-col items-center h-[480px]'>

      <div className='flex justify-between w-full'>
        <div className='mx-40 px-auto mt-5 '>
          <SideFooter />
        </div>
        <div className='mx-auto  mt-5'>
          <MenuFooter />
        </div>
      </div>

      
      <div className='mt-auto py-4 text-center text-[#71717A]'>
        © 2024 made by <span> Stéphanie MAMINIAINA </span>
      </div>
    </div>
  );
};

export default Footer;
