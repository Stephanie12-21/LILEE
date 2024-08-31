
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import {
//     Avatar,
//     AvatarFallback,
//     AvatarImage,
//   } from "@/components/ui/avatar";

// export function CardCarrousel() {
//   return (
    
        
//         <Carousel className="justify-between flex items-center ">
//       <CarouselContent className="-ml-1">
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
//             <div className="p-1">
//               <Card className='w-[371px] h-[282px] justify-between items-center rounded-[16px]'>
//                 <CardContent className="flex flex-col items-start justify-center space-y-5 pt-5 ">
//                   <div className=' font-medium text-[#3B5266]'>
//                         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos enim voluptatem? Doloribus, numquam autem?
//                             Lorem ipsum dolor sit amet.Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
//                         </p>
//                   </div>

               
//                     <div className="flex space-x-1">
//                         {[...Array(5)].map((_, index) => (
//                         <svg
//                             key={index}
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="#FCA311"
//                             viewBox="0 0 24 24"
//                             strokeWidth="1.5"
//                             stroke="none"
//                             className="w-6 h-6"
//                         >
//                             <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.73L6.82 21z"
//                             />
//                         </svg>
//                         ))}
//                     </div>
                    
//                   <div className='flex items-center'>
//                     <Avatar>
//                         <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
//                         <AvatarFallback>CN</AvatarFallback>
//                     </Avatar>
//                     <div className='flex pl-10 flex-col gap-y-2'>
//                         <p className="text-[#304659]">Nom</p>
//                         <p className="text-[#555555]">User role</p>
//                     </div>
//                   </div>
                  
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
  
    
//   )
// }

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export function CardCarrousel() {
  return (
    <Carousel className="justify-between flex items-center ">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className='w-[371px] h-[282px] justify-between items-center rounded-[16px] '>
                <CardContent className="flex flex-col items-start justify-center space-y-5 pt-5 ">
                  <div className='font-medium text-[#3B5266]'>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos enim voluptatem? Doloribus, numquam autem?
                      Lorem ipsum dolor sit amet.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FCA311"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="none"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.73L6.82 21z"
                        />
                      </svg>
                    ))}
                  </div>
                  <div className='flex items-center'>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className='flex pl-10 flex-col gap-y-2'>
                      <p className="text-[#304659]">Nom</p>
                      <p className="text-[#555555]">User role</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
