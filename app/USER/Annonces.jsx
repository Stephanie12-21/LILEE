
import React from 'react'
import { AddAnnonces } from './AddAnnonces'
import { RiSearchLine } from 'react-icons/ri'
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { SeeAnnoncesDetails } from './SeeAnnoncesDetails';
import { EditAnnonces } from './EditAnnonces';
import { DeleteAnnonces } from './DeleteAnnonces';



const Annonces = () => {
  return (
    <div className='py-5'>
      <h1 className='text-[#263056] text-[30px] font-bold'>Liste des annonces</h1>
      <div className='flex justify-between pt-2 space-x-96'>
        <div className="relative w-full">
          <RiSearchLine className="absolute left-3 top-1/2 size-[24px] transform -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Rechercher ici..." 
            className="border border-gray-300 py-2 px-10 w-full rounded-lg" 
          />
        </div>
        <div>
          <AddAnnonces />
        </div>
      
      </div>

      <div className='grid grid-cols-3 gap-12 py-10'>
        {Array(10).fill().map((_, index) => (
          <Card key={index} className="w-[350px] h-[400px] rounded-[12px] shadow sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl">
            <CardContent className="w-[340px] h-[250px] flex items-center mx-auto mt-1 rounded-[16px] border-[1px] border-[#e39a2d] bg-[#3e3131] bg-cover bg-no-repeat">
              <p>Image</p>
            </CardContent>
            <CardFooter className="flex items-center justify-between space-y-2">
              <div className='flex flex-col p-2'>
                <div className='flex justify-between space-x-[270px]'>
                  <p>Titre</p>
                  <p>Prix</p>
                </div>
                <div className='pt-2'>
                  <p>Localisation</p>
                </div>
                <div className='flex justify-between pt-6'>
                  <SeeAnnoncesDetails />
                  <EditAnnonces />
                  <DeleteAnnonces />
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      
        <Pagination>
          <PaginationContent >
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="text-[17px]">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="text-[17px]">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="text-[17px]">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#"/></PaginationItem>
          </PaginationContent>
        </Pagination>
      

    </div>

  )
}

export default Annonces