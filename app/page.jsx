import FaqSections from "@/components/Components/Main/Sections/FaqSections";
import HomeSection from "@/components/Components/Main/Sections/HomeSection";
import LogementSection from "@/components/Components/Main/Sections/LogementSection";
import SponsorSection from "@/components/Components/Main/Sections/SponsorSection";
import TestimonialSection from "@/components/Components/Main/Sections/TestimonialSection";
import TipsSection from "@/components/Components/Main/Sections/TipSection";


export default function Home() {
  return (
    <main>
      <div className='bg-red-700'>
        <HomeSection/>
      </div>

      <div className='bg-purple-600'>
        <LogementSection/>
      </div>

      <div className='bg-blue-600'>
        <TipsSection/>
      </div>

      <div className='bg-gray-700'>
        <FaqSections/>
      </div>

       <div className='bg-orange-500'>
        <TestimonialSection/>
       </div>

       <div className='bg-green-600'>
        <SponsorSection/>
       </div>
      
      
      
     
      
     
    </main>
  );
}
