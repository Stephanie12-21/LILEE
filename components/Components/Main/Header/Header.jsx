// import React from 'react'
// import FirstHeader from './FirstHeader';
// import SubHeader from './SubHeader';
// import { Separator } from '@/components/ui/separator';


// const Header = () => {
//   return (
//     <div className='bg-slate-600'>
//       <FirstHeader/>
//       <Separator/>
//       <SubHeader/>
//     </div>
//   );
// };

// export default Header;

import React from 'react';
import FirstHeader from './FirstHeader';
import SubHeader from './SubHeader';
import { Separator } from '@/components/ui/separator';

const Header = () => {
  return (
    <div className='bg-[#15213D] '>
      <div className='h-[56px]'> {/* Fixed height for FirstHeader */}
        <FirstHeader />
      </div>
      <Separator />
      <div className='h-[88px] '> {/* Fixed height for SubHeader */}
        <SubHeader />
      </div>

    </div>
  );
};

export default Header;


