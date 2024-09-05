import React from 'react'
import Image from 'next/image'

const MaterielSection = () => {
  return (
    <div className='flex justify-between items-center  mx-auto pt-16 '>
      <div className='flex flex-row space-x-20'>
          <div className='flex flex-col pt-14 space-y-9'>
              <h1 className='text-4xl text-[#15213D] font-poppins font-semibold'>
                  Vous galérez à trouver des matériels <br />particulièrement adaptés <br />à votre situation et vos besoins?
              </h1>
              <p className='text-[#263056]'>
                  Trouvez ici toutes les pépites  <br /> qu'il vous faut. 
              </p>
          </div>
          <div className='relative flex-1 items-center pt-10'>
              <Image src="/slides_photo/photo(5).svg" width={400} height={500}/>
          </div>
      </div>
    </div>
  )
}

export default MaterielSection