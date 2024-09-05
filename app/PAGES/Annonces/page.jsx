 "use client";

// import { CardSection } from "@/components/Components/Main/Sections/Logements/CardSection";
// import { motion, useAnimation } from 'framer-motion';
// import { useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';

// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs";

// export function Annonces() {
//   const cardVariants = {
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.05,
//         duration: 0.3,
//       },
//     }),
//     hidden: (i) => ({
//       opacity: 0,
//       y: 50,
//       transition: {
//         delay: i * 0.01, 
//         duration: 0.3,
//       },
//     }),
//   };

//   return (
//     <Tabs defaultValue="tout" className="w-full py-9 px-6">
//       <TabsList className="grid w-full grid-cols-8 space-x-10 h-[70px] text-black">
//         <TabsTrigger value="tout" className='text-[16px] font-semibold'>Tout</TabsTrigger>
//         <TabsTrigger value="immobilier" className='text-[16px] font-semibold'>Immobilier</TabsTrigger>
//         <TabsTrigger value="emploi" className='text-[16px] font-semibold'>Emplois</TabsTrigger>
//         <TabsTrigger value="voiture" className='text-[16px] font-semibold'>Voitures</TabsTrigger>
//         <TabsTrigger value="loisir" className='text-[16px] font-semibold'>Loisirs</TabsTrigger>
//         <TabsTrigger value="materiel" className='text-[16px] font-semibold'>Matériels</TabsTrigger>
//         <TabsTrigger value="don" className='text-[16px] font-semibold'>Dons</TabsTrigger>
//         <TabsTrigger value="vetement" className='text-[16px] font-semibold'>Vêtements</TabsTrigger>
//       </TabsList>

//       <TabsContent value="tout" className="container mx-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {[...Array(21)].map((_, index) => {
//             const [ref, inView] = useInView({
//               threshold: 0.1,
//               triggerOnce: false, // L'animation ne sera déclenchée qu'une seule fois
//             });
//             const controls = useAnimation();

//             useEffect(() => {
//               if (inView) {
//                 controls.start('visible');
//               } else {
//                 controls.start('hidden');
//               }
//             }, [controls, inView]);

//             return (
//               <motion.div
//                 key={index}
//                 ref={ref}
//                 custom={index}
//                 initial="hidden"
//                 animate={controls}
//                 variants={cardVariants}
//               >
//                 <CardSection />
//               </motion.div>
//             );
//           })}
//         </div>
//       </TabsContent>


      // <TabsContent value="immobilier" className="container mx-auto">
      //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      //     {[...Array(21)].map((_, index) => {
      //       const [ref, inView] = useInView({
      //         threshold: 0.1,
      //         triggerOnce: false,
      //       });
      //       const controls = useAnimation();

      //       useEffect(() => {
      //         if (inView) {
      //           controls.start('visible');
      //         } else {
      //           controls.start('hidden');
      //         }
      //       }, [controls, inView]);

      //       return (
      //         <motion.div
      //           key={index}
      //           ref={ref}
      //           custom={index}
      //           initial="hidden"
      //           animate={controls}
      //           variants={cardVariants}
      //         >
      //           <CardSection />
      //         </motion.div>
      //       );
      //     })}
      //   </div>
      // </TabsContent>

      // <TabsContent value="emploi" className="container mx-auto">
      //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      //     {[...Array(21)].map((_, index) => {
      //       const [ref, inView] = useInView({
      //         threshold: 0.1,
      //         triggerOnce: false,
      //       });
      //       const controls = useAnimation();

      //       useEffect(() => {
      //         if (inView) {
      //           controls.start('visible');
      //         } else {
      //           controls.start('hidden');
      //         }
      //       }, [controls, inView]);

      //       return (
      //         <motion.div
      //           key={index}
      //           ref={ref}
      //           custom={index}
      //           initial="hidden"
      //           animate={controls}
      //           variants={cardVariants}
      //         >
      //           <CardSection />
      //         </motion.div>
      //       );
      //     })}
      //   </div>
      // </TabsContent>

      // <TabsContent value="voiture" className="container mx-auto">
      //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      //     {[...Array(21)].map((_, index) => {
      //       const [ref, inView] = useInView({
      //         threshold: 0.1,
      //         triggerOnce: false,
      //       });
      //       const controls = useAnimation();

      //       useEffect(() => {
      //         if (inView) {
      //           controls.start('visible');
      //         } else {
      //           controls.start('hidden');
      //         }
      //       }, [controls, inView]);

      //       return (
      //         <motion.div
      //           key={index}
      //           ref={ref}
      //           custom={index}
      //           initial="hidden"
      //           animate={controls}
      //           variants={cardVariants}
      //         >
      //           <CardSection />
      //         </motion.div>
      //       );
      //     })}
      //   </div>
      // </TabsContent>

      // <TabsContent value="loisir" className="container mx-auto">
      //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      //     {[...Array(21)].map((_, index) => {
      //       const [ref, inView] = useInView({
      //         threshold: 0.1,
      //         triggerOnce: false,
      //       });
      //       const controls = useAnimation();

      //       useEffect(() => {
      //         if (inView) {
      //           controls.start('visible');
      //         } else {
      //           controls.start('hidden');
      //         }
      //       }, [controls, inView]);

      //       return (
      //         <motion.div
      //           key={index}
      //           ref={ref}
      //           custom={index}
      //           initial="hidden"
      //           animate={controls}
      //           variants={cardVariants}
      //         >
      //           <CardSection />
      //         </motion.div>
      //       );
      //     })}
      //   </div>
      // </TabsContent>

      // <TabsContent value="materiel" className="container mx-auto">
      //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      //     {[...Array(21)].map((_, index) => {
      //       const [ref, inView] = useInView({
      //         threshold: 0.1,
      //         triggerOnce: false,
      //       });
      //       const controls = useAnimation();

      //       useEffect(() => {
      //         if (inView) {
      //           controls.start('visible');
      //         } else {
      //           controls.start('hidden');
      //         }
      //       }, [controls, inView]);

      //       return (
      //         <motion.div
      //           key={index}
      //           ref={ref}
      //           custom={index}
      //           initial="hidden"
      //           animate={controls}
      //           variants={cardVariants}
      //         >
      //           <CardSection />
      //         </motion.div>
      //       );
      //     })}
      //   </div>
      // </TabsContent>

      // <TabsContent value="don" className="container mx-auto">
      //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      //     {[...Array(21)].map((_, index) => {
      //       const [ref, inView] = useInView({
      //         threshold: 0.1,
      //         triggerOnce: false,
      //       });
      //       const controls = useAnimation();

      //       useEffect(() => {
      //         if (inView) {
      //           controls.start('visible');
      //         } else {
      //           controls.start('hidden');
      //         }
      //       }, [controls, inView]);

      //       return (
      //         <motion.div
      //           key={index}
      //           ref={ref}
      //           custom={index}
      //           initial="hidden"
      //           animate={controls}
      //           variants={cardVariants}
      //         >
      //           <CardSection />
      //         </motion.div>
      //       );
      //     })}
      //   </div>
      // </TabsContent>

      // <TabsContent value="vetement" className="container mx-auto">
      //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      //     {[...Array(21)].map((_, index) => {
      //       const [ref, inView] = useInView({
      //         threshold: 0.1,
      //         triggerOnce: false,
      //       });
      //       const controls = useAnimation();

      //       useEffect(() => {
      //         if (inView) {
      //           controls.start('visible');
      //         } else {
      //           controls.start('hidden');
      //         }
      //       }, [controls, inView]);

      //       return (
      //         <motion.div
      //           key={index}
      //           ref={ref}
      //           custom={index}
      //           initial="hidden"
      //           animate={controls}
      //           variants={cardVariants}
      //         >
      //           <CardSection />
      //         </motion.div>
      //       );
      //     })}
      //   </div>
      // </TabsContent>

      

//     </Tabs>
//   );
// }

// export default Annonces;

import { CardSection } from "@/components/Components/Main/Sections/Logements/CardSection";
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { SettingSection } from "@/components/Components/Main/Sections/HomePage/SettingSection";
import { FaSearch } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export function Annonces() {
  const cardVariants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
    hidden: (i) => ({
      opacity: 0,
      y: 50,
      transition: {
        delay: i * 0.01, 
        duration: 0.3,
      },
    }),
  };

  return (
    <div className="w-full py-9 px-6">
      {/* Champ de recherche */}
      <div className="mb-6 container mx-auto flex justify-between items-center space-x-3">
        <input 
          type="text" 
          placeholder="Rechercher ici..." 
          className="border border-gray-300 p-2 w-full rounded-lg" 
        />
        <SettingSection/>
        <Button className="flex items-center justify-center p-2 w-12 h-12 text-lg">
            <FaSearch className="text-2xl" />
          </Button>
      </div>

      <Tabs defaultValue="tout" className="container mx-auto">
        <TabsList className="grid w-full grid-cols-8 space-x-10 h-[70px] text-black">
          <TabsTrigger value="tout" className='text-[16px] font-semibold'>Tout</TabsTrigger>
          <TabsTrigger value="immobilier" className='text-[16px] font-semibold'>Immobilier</TabsTrigger>
          <TabsTrigger value="emploi" className='text-[16px] font-semibold'>Emplois</TabsTrigger>
          <TabsTrigger value="voiture" className='text-[16px] font-semibold'>Voitures</TabsTrigger>
          <TabsTrigger value="loisir" className='text-[16px] font-semibold'>Loisirs</TabsTrigger>
          <TabsTrigger value="materiel" className='text-[16px] font-semibold'>Matériels</TabsTrigger>
          <TabsTrigger value="don" className='text-[16px] font-semibold'>Dons</TabsTrigger>
          <TabsTrigger value="vetement" className='text-[16px] font-semibold'>Vêtements</TabsTrigger>
        </TabsList>

        <TabsContent value="tout" className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(21)].map((_, index) => {
              const [ref, inView] = useInView({
                threshold: 0.1,
                triggerOnce: false,
              });
              const controls = useAnimation();

              useEffect(() => {
                if (inView) {
                  controls.start('visible');
                } else {
                  controls.start('hidden');
                }
              }, [controls, inView]);

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  custom={index}
                  initial="hidden"
                  animate={controls}
                  variants={cardVariants}
                >
                  <CardSection />
                </motion.div>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="immobilier" className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(21)].map((_, index) => {
            const [ref, inView] = useInView({
              threshold: 0.1,
              triggerOnce: false,
            });
            const controls = useAnimation();

            useEffect(() => {
              if (inView) {
                controls.start('visible');
              } else {
                controls.start('hidden');
              }
            }, [controls, inView]);

            return (
              <motion.div
                key={index}
                ref={ref}
                custom={index}
                initial="hidden"
                animate={controls}
                variants={cardVariants}
              >
                <CardSection />
              </motion.div>
            );
          })}
        </div>
      </TabsContent>

      <TabsContent value="emploi" className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(21)].map((_, index) => {
            const [ref, inView] = useInView({
              threshold: 0.1,
              triggerOnce: false,
            });
            const controls = useAnimation();

            useEffect(() => {
              if (inView) {
                controls.start('visible');
              } else {
                controls.start('hidden');
              }
            }, [controls, inView]);

            return (
              <motion.div
                key={index}
                ref={ref}
                custom={index}
                initial="hidden"
                animate={controls}
                variants={cardVariants}
              >
                <CardSection />
              </motion.div>
            );
          })}
        </div>
      </TabsContent>

      <TabsContent value="voiture" className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(21)].map((_, index) => {
            const [ref, inView] = useInView({
              threshold: 0.1,
              triggerOnce: false,
            });
            const controls = useAnimation();

            useEffect(() => {
              if (inView) {
                controls.start('visible');
              } else {
                controls.start('hidden');
              }
            }, [controls, inView]);

            return (
              <motion.div
                key={index}
                ref={ref}
                custom={index}
                initial="hidden"
                animate={controls}
                variants={cardVariants}
              >
                <CardSection />
              </motion.div>
            );
          })}
        </div>
      </TabsContent>

      <TabsContent value="loisir" className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(21)].map((_, index) => {
            const [ref, inView] = useInView({
              threshold: 0.1,
              triggerOnce: false,
            });
            const controls = useAnimation();

            useEffect(() => {
              if (inView) {
                controls.start('visible');
              } else {
                controls.start('hidden');
              }
            }, [controls, inView]);

            return (
              <motion.div
                key={index}
                ref={ref}
                custom={index}
                initial="hidden"
                animate={controls}
                variants={cardVariants}
              >
                <CardSection />
              </motion.div>
            );
          })}
        </div>
      </TabsContent>

      <TabsContent value="materiel" className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(21)].map((_, index) => {
            const [ref, inView] = useInView({
              threshold: 0.1,
              triggerOnce: false,
            });
            const controls = useAnimation();

            useEffect(() => {
              if (inView) {
                controls.start('visible');
              } else {
                controls.start('hidden');
              }
            }, [controls, inView]);

            return (
              <motion.div
                key={index}
                ref={ref}
                custom={index}
                initial="hidden"
                animate={controls}
                variants={cardVariants}
              >
                <CardSection />
              </motion.div>
            );
          })}
        </div>
      </TabsContent>

      <TabsContent value="don" className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(21)].map((_, index) => {
            const [ref, inView] = useInView({
              threshold: 0.1,
              triggerOnce: false,
            });
            const controls = useAnimation();

            useEffect(() => {
              if (inView) {
                controls.start('visible');
              } else {
                controls.start('hidden');
              }
            }, [controls, inView]);

            return (
              <motion.div
                key={index}
                ref={ref}
                custom={index}
                initial="hidden"
                animate={controls}
                variants={cardVariants}
              >
                <CardSection />
              </motion.div>
            );
          })}
        </div>
      </TabsContent>

      <TabsContent value="vetement" className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(21)].map((_, index) => {
            const [ref, inView] = useInView({
              threshold: 0.1,
              triggerOnce: false,
            });
            const controls = useAnimation();

            useEffect(() => {
              if (inView) {
                controls.start('visible');
              } else {
                controls.start('hidden');
              }
            }, [controls, inView]);

            return (
              <motion.div
                key={index}
                ref={ref}
                custom={index}
                initial="hidden"
                animate={controls}
                variants={cardVariants}
              >
                <CardSection />
              </motion.div>
            );
          })}
        </div>
      </TabsContent>
      </Tabs>
    </div>
  );
}

export default Annonces;
