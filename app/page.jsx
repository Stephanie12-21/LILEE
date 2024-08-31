import FaqSections from "@/components/Components/Main/Sections/FAQ/FaqSections";
import HomeSection from "@/components/Components/Main/Sections/HomePage/HomeSection";

import LogementSection from "@/components/Components/Main/Sections/Logements/LogementSection";
import SponsorSection from "@/components/Components/Main/Sections/Sponsors/SponsorSection";

import { TestimonialSection } from "@/components/Components/Main/Sections/Testimonials/TestimonialSection";

import TipsSection from "@/components/Components/Main/Sections/TipSection";


export default function Home() {
  return (
    <main className="bg-[#fff1da]">
      
      <div >
        <HomeSection/>
      </div>

      <div >
        <LogementSection/>
      </div>

      <div>
        <TipsSection/>
      </div>

      <div >
        <FaqSections/>
      </div>

       <div >
        <TestimonialSection/>
       </div>

       <div>
        <SponsorSection/>
       </div>
      
      
      
     
      
     
    </main>
  );
}
