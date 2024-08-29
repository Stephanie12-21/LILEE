import React from 'react'
import ListIcons from './ListIcons';
import ListContact from './ListContact';

const FirstHeader = () => {
  return (
    <div className='container mx-auto pt-3'>
      <div className='flex justify-between items-center'>
        <ListContact/>
        <ListIcons/>
      </div>
    </div>
  );
};

export default FirstHeader;