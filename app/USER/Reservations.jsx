
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import React from 'react';
import { RiSearchLine } from 'react-icons/ri';

const Reservations = () => {
  return (
    <div className='py-9'>
      {/* Utilisation de flex ici pour aligner le h1 et le Select */}
      <div className="flex justify-between items-center">
        <h1 className='text-[#263056] text-[30px] font-bold'>Liste des réservations</h1>
        
        <Select>
          <SelectTrigger className="w-fit px-4">
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

      
      <div className='flex justify-between pt-5 space-x-10'>
        <div className="relative w-[500px]">
          <RiSearchLine className="absolute left-3 top-1/2 size-[24px] transform -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Rechercher ici..." 
            className="border border-gray-300 py-2 px-10 w-full rounded-lg" 
          />
        </div>
      </div>


    </div>
  );
};

export default Reservations;
