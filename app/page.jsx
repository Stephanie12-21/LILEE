import FaqSections from "@/components/Components/Main/Sections/FAQ/FaqSections";
import HomeSection from "@/components/Components/Main/Sections/HomePage/HomeSection";

import LogementSection from "@/components/Components/Main/Sections/Logements/LogementSection";
import SponsorSection from "@/components/Components/Main/Sections/SponsorSection";
import { TestimonialSection } from "@/components/Components/Main/Sections/Testimonials/TestimonialSection";

import TipsSection from "@/components/Components/Main/Sections/TipSection";


export default function Home() {
  return (
    <main>
      <div className='bg-image1 bg-cover bg-no-repeat'>
        <HomeSection/>
      </div>

      <div className='bg-purple-600'>
        <LogementSection/>
      </div>

      <div className='bg-[#FCA311]'>
        <TipsSection/>
      </div>

      <div className='bg-[#FAFAFA]'>
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
