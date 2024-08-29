import React from 'react'
import TextSection from './TextSection'
import { QuestionList } from './QuestionList'


const FaqSections = () => {
  return (
    <div className='container mx-auto flex justify-between items-center gap-x-10 h-[580px]'>
      <TextSection/>
      <QuestionList/>
    </div>
  )
}

export default FaqSections