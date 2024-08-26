import React from 'react'
import FirstHeader from './FirstHeader';
import SubHeader from './SubHeader';
import { Separator } from '@/components/ui/separator';


const Header = () => {
  return (
    <div className='bg-slate-600'>
      <FirstHeader/>
      <Separator/>
      <SubHeader/>
    </div>
  );
};

export default Header;



