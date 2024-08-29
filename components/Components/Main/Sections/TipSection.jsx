// import Image from 'next/image';
// import React from 'react';


// const TipsSection = () => {
//   return (
//     <div className='container mx-auto flex items-center justify-between my-5 h-[300px] '>
//       <div className='flex items-center justify-between w-[1044px]  mx-auto'>
//         <div className='flex flex-col items-center justify-between gap-y-2 text-[20px] '>
//           <Image src="/assets/Figure.svg" alt="Description de l'image" width={65} height={58.28}/>
//           <p>Services clients</p>
//           <p> 24/7</p>
//         </div>

//         <div className='flex flex-col items-center justify-between text-[20px] mt-7 '>
//           <Image src="/assets/Figure(3).svg" alt="Description de l'image" width={80} height={58.08}/>
//           <p>Payement en ligne</p>
//           <p>&</p>
//           <p>sécurisé</p>
//         </div>

//         <div className='flex flex-col items-center justify-between text-[20px] '>
//           <Image src="/assets/Figure(1).svg" alt="Description de l'image" width={70} height={58.5}/>
//           <p>Devenir hôte</p>
//           <p>facilement</p>
//         </div>

//         <div className='flex flex-col items-center justify-between text-[20px]'>
//           <Image src="/assets/Figure(2).svg" alt="Description de l'image" width={72} height={58.24}/>
//           <p>Services très</p>
//           <p>rapides</p>
//         </div>
//       </div>
   
      
//     </div>
//   )
// }

// export default TipsSection

import {
  Card,
  CardHeader,CardContent
} from "@/components/ui/card"
import Image from 'next/image';
import React from 'react';

const TipsSection = () => {
  return (
    <div className='container mx-auto flex items-center justify-between my-5 h-[300px]'>
      <div className='flex items-center justify-between w-full mx-auto space-x-4'>
        {/* Card 1 */}
        <Card className='w-full max-w-xs flex justify-between items-center flex-col h-[250px]'>
          <CardHeader>
            <Image src="/assets/Figure.svg" alt="Description de l'image" width={72} height={60}  className='mt-8'/>
          </CardHeader>
          <CardContent className='flex justify-between items-center flex-col mb-5'>
            <h4 className='text-lg font-semibold'>Services très</h4>
            <p className='text-lg font-semibold'>rapides</p>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className='w-full max-w-xs flex justify-between items-center flex-col h-[250px]'>
          <CardHeader>
            <Image src="/assets/Figure(3).svg" alt="Description de l'image" width={72} height={60}  className='mt-8' />
          </CardHeader>
          <CardContent className='flex justify-between items-center flex-col mb-5'>
            <h4 className='text-lg font-semibold'>Services très</h4>
            <p className='text-lg font-semibold'>rapides</p>
          </CardContent>
        </Card>


        {/* Card 3 */}
        <Card className='w-full max-w-xs flex justify-between items-center flex-col h-[250px]'>
          <CardHeader>
            <Image src="/assets/Figure(1).svg" alt="Description de l'image" width={72} height={60}  className='mt-8' />
          </CardHeader>
          <CardContent className='flex justify-between items-center flex-col mb-5'>
            <h4 className='text-lg font-semibold'>Services très</h4>
            <p className='text-lg font-semibold'>rapides</p>
          </CardContent>
        </Card>

        {/* Card 4 */}
        <Card className='w-full max-w-xs flex justify-between items-center flex-col h-[250px]'>
          <CardHeader>
            <Image src="/assets/Figure(2).svg" alt="Description de l'image" width={72} height={60} className='mt-8' />
          </CardHeader>
          <CardContent className='flex justify-between items-center flex-col mb-5'>
            <h4 className='text-lg font-semibold'>Services très</h4>
            <p className='text-lg font-semibold'>rapides</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default TipsSection;
