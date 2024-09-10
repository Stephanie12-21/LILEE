

import React from 'react';
import FirstHeader from './FirstHeader';
import SubHeader from './SubHeader';
import { Separator } from '@/components/ui/separator';

const Header = () => {
  return (
    <div className='bg-[#15213D] '>
      <div className='h-[56px]'> 
        <FirstHeader />
      </div>
      <Separator />
      <div className='h-[88px] '> 
        <SubHeader />
      </div>

    </div>
  );
};

export default Header;


