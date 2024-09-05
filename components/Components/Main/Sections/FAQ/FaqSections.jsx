"use client";
import React from 'react';
import TextSection from './TextSection';
import { QuestionList } from './QuestionList';
import { AnimatePresence } from 'framer-motion';

const FaqSections = () => {
  return (
    <div className='container mx-auto flex justify-between items-center gap-x-10 h-[600px]'>
      <AnimatePresence>
        <TextSection />
        <QuestionList />
      </AnimatePresence>
    </div>
  );
};

export default FaqSections;
