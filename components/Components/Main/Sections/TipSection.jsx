
"use client";
import {
  Card,
  CardHeader, CardContent
} from "@/components/ui/card";
import Image from 'next/image';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TipsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 1, 
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const cardVariants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3, // Délai d'apparition pour chaque carte
        duration: 0.5,
      },
    }),
    hidden: (i) => ({
      opacity: 0,
      y: 50, // Fait apparaître les cartes avec un effet de glissement vers le haut
      transition: {
        delay: i * 0.3, // Délai de disparition pour chaque carte
        duration: 0.5,
      },
    }),
  };

  const cards = [
    { src: "/assets/Figure.svg", title1: "Services très", title2: "rapides" },
    { src: "/assets/Figure(3).svg", title1: "Payement en ligne", title2: "sécurisé" },
    { src: "/assets/Figure(1).svg", title1: "Devenir hôte", title2: "facilement" },
    { src: "/assets/Figure(2).svg", title1: "Services clients", title2: "24/7" },
  ];

  return (
    <div className='container mx-auto flex items-center justify-between my-5 h-[400px]'>
      <motion.div
        ref={ref}
        className='flex items-center justify-between w-full mx-auto space-x-4'
        initial="hidden"
        animate={controls}
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            className='w-full max-w-xs flex justify-between items-center flex-col h-[250px] bg-[#fccd83] hover:bg-[#FCA311] rounded-[36px]'
          >
            <CardHeader>
              <Image src={card.src} alt="Description de l'image" width={72} height={60} className='mt-8' />
            </CardHeader>
            <CardContent className='flex justify-between items-center flex-col mb-5'>
              <h4 className='text-lg font-semibold'>{card.title1}</h4>
              <p className='text-lg font-semibold'>{card.title2}</p>
            </CardContent>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default TipsSection;
