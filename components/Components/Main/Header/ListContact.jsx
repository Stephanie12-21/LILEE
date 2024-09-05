import React from 'react'
import Logo from './Logo';
import Image from 'next/image';
import { Label } from '@/components/ui/label';

const ListContact = () => {
  return (
    
        <div className='flex justify-between items-center gap-x-10'>
            <div className='flex justify-between items-center space-x-2'>
              <Image src="/icons/icons(1).svg" width={24} height={24}/>
              <Label className="text-[16px] text-white font-extralight">Localisation</Label>
            </div>
            <div className='flex justify-between items-center space-x-2'>
              <Image src="/icons/icons(8).svg" width={24} height={24}/>
              <Label className="text-[16px] text-white font-extralight">Téléphone</Label>
            </div>
            <div className='flex justify-between items-center space-x-2'>
              <Image src="/icons/icons(7).svg" width={24} height={24}/>
              <Label className="text-[16px] text-white font-extralight">Adresse email</Label>
            </div>
        </div>  
    
  );
};

export default ListContact;