import React from 'react'
import ListButton from './ListButton';
import ListLinks from './ListLinks';
import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
  return (
   
    <div className='container ml-12  mr-1 pt-5'>
      <div className='flex justify-between items-center'>
       <Link href="/"> <Image src="/assets/Logo_site.svg" width={140} height={50}/> </Link> 
        <ListLinks/>
        <ListButton/>
      </div>
      
    </div>
  );
};

 export default Nav;

