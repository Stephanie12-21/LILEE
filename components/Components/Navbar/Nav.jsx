import React from 'react'
import Logo from '../Main/Header/Logo';
import ListButton from './ListButton';
import ListLinks from './ListLinks';

const Nav = () => {
  return (
   
    <div className='container mx-auto pt-4'>
      <div className='flex justify-between items-center '>
        <Logo/>
        <ListLinks/>
        <ListButton/>
      </div>
      
    </div>
  );
};

 export default Nav;

