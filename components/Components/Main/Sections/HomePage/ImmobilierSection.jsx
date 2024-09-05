
import  Image  from 'next/image';

const ImmobilierSection = () => {
  return (
    <div className='flex justify-between items-center  mx-auto pt-16 '>
      <div className='flex flex-row space-x-20'>
          <div className='flex flex-col pt-14 space-y-9'>
              <h1 className='text-4xl text-[#15213D] font-poppins font-semibold'>
                  Vous galérez à trouver des locations <br /> de maisons pour vos vacances?
              </h1>
              <p className='text-[#263056]'>
                  Trouvez ici tout type d'immobilier <br /> particulièrement adapté à vos besoins.
              </p>
          </div>
          <div className='relative flex-1 items-center'>
              <Image src="/slides_photo/photo(1).svg" width={300} height={400}/>
          </div>
      </div>
    </div>

  )
}

export default ImmobilierSection