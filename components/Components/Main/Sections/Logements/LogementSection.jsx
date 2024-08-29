// import { Button } from '@/components/ui/button'
// import React from 'react'
// import { CardSection } from './CardSection'

// const LogementSection = () => {
//   return (
//     <div className="container mx-auto py-20 h-[656px]">
//       <div className='flex justify-between '>
//         <h1 className='text-[30px]'>Trouver des locations adaptées à vos besoins</h1>
//         <Button> Voir plus </Button>
//       </div>

      
//        <div className='flex justify-between items-center'>
//         <CardSection/>
//         <CardSection/>
//         <CardSection/>
//        </div>
//     </div>
//   )
// }

// export default LogementSection;

import { Button } from '@/components/ui/button'
import React from 'react'
import { CardSection } from './CardSection'
import { FaArrowRight } from 'react-icons/fa'

const LogementSection = () => {
  return (
    <div className="container mx-auto py-20 h-[656px]">
      <div className='flex justify-between'>
        <h1 className='text-[30px]'>Trouvez des locations adaptées à vos besoins.</h1>
        <Button className='h-[45px] w-[137px] text-[18px] rounded-[10px]'> 
          Voir plus 
          <FaArrowRight className="ml-2"/>
        </Button>
      </div>

      {/* Ajout d'un espace entre les deux div */}
      <div className='mt-8 flex justify-between items-center'>
        <CardSection/>
        <CardSection/>
        <CardSection/>
      </div>
    </div>
  )
}

export default LogementSection;
