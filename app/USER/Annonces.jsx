// import React from 'react'
// import { AddAnnonces } from './AddAnnonces'

// const Annonces = () => {
//   return (
//     <div className=' py-5'>
//       <h1 className='text-[#263056] text-[30px] font-bold'>Liste des annonces</h1>
//       <div className='flex justify-between pt-2 space-x-96'>
//         <input 
//           type="text" 
//           placeholder="Rechercher ici..." 
//           className="border border-gray-300 py-2 px-3 w-full rounded-lg" 
//         />
//         <AddAnnonces/>
//       </div>
//     </div>
//   )
// }

// export default Annonces

import React from 'react'
import { AddAnnonces } from './AddAnnonces'
import { RiSearchLine } from 'react-icons/ri'

const Annonces = () => {
  return (
    <div className='py-5'>
      <h1 className='text-[#263056] text-[30px] font-bold'>Liste des annonces</h1>
      <div className='flex justify-between pt-2 space-x-96'>
        <div className="relative w-full">
          <RiSearchLine className="absolute left-3 top-1/2  size-[24px] transform -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Rechercher ici..." 
            className="border border-gray-300 py-2 px-10 w-full rounded-lg" 
          />
        </div>
        <AddAnnonces />
      </div>
    </div>
  )
}

export default Annonces
