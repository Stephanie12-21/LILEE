
// Reservations.jsx
import React from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from "@/components/ui/button";
import TableClient from './TableClient'; // Import the new TableClient component

const Reservations = () => {
  return (
    <div className='py-9'>
      <div className="flex justify-between items-center">
        <h1 className='text-[#263056] text-[30px] font-bold'>Liste des réservations</h1>
        <div className="flex gap-x-5 items-center">
          <Select>
            <SelectTrigger className="w-fit">
              <SelectValue placeholder="Sélectionner la catégorie" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="proprietaire">En tant que propriétaire</SelectItem>
                <SelectItem value="client">En tant que client</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className='pt-8'>
        <div className="flex justify-between items-center gap-x-3">
          <div className='flex w-[40%] relative'>
            <input
              placeholder='Rechercher...'
              className='text-[#9D9D9D] text-sm w-full bg-[#F9F9F9] rounded-[12px] py-2 px-4 outline-none border-none'
            />
            <RiSearchLine className='absolute right-4 top-[50%] translate-y-[-50%] text-xl text-[#9D9D9D]' />
          </div>
          <Button variant="outline" size="sm">Exporter</Button>
        </div>
        <div className='pt-5'>
          <TableClient /> {/* Use the TableClient component */}
        </div>
      </div>
    </div>
  );
}

export default Reservations;
