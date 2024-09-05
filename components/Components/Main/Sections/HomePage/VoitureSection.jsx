import React from 'react'
import Image from 'next/image'

const VoitureSection = () => {
  return (
    <div className='flex justify-between items-center  mx-auto pt-16 '>
      <div className='flex flex-row space-x-20'>
          <div className='flex flex-col pt-14 space-y-9'>
              <h1 className='text-4xl text-[#15213D] font-poppins font-semibold'>
                  Vous galérez à trouver des locations <br /> de voitures pour vos déplacements?
              </h1>
              <p className='text-[#263056]'>
                  Trouvez ici tout type de voitures <br /> particulièrement adaptées à vos besoins.
              </p>
          </div>
          <div className='relative flex-1 items-center pt-7'>
              <Image src="/slides_photo/photo(4).svg" width={400} height={500}/>
          </div>
      </div>
    </div>
  )
}

export default VoitureSection