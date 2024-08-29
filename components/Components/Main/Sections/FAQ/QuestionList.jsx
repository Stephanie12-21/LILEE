import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function QuestionList() {
    return (
      <Accordion type="single" collapsible className="w-[700px] space-y-1 ">
        <AccordionItem value="item-1" className='bg-slate-50 rounded-[10px] p-4 shadow sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl'>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident corporis ipsum quibusdam libero iste amet. Saepe quod cum ducimus deleniti quisquam porro harum itaque animi dolorem exercitationem! In, amet ducimus.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className='bg-slate-50 rounded-[10px] p-4 shadow sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl'>
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident corporis ipsum quibusdam libero iste amet. Saepe quod cum ducimus deleniti quisquam porro harum itaque animi dolorem exercitationem! In, amet ducimus.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className='bg-slate-50 rounded-[10px] p-4 shadow sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl'>
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident corporis ipsum quibusdam libero iste amet. Saepe quod cum ducimus deleniti quisquam porro harum itaque animi dolorem exercitationem! In, amet ducimus.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className='bg-slate-50 rounded-[10px] p-4 shadow sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl'>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident corporis ipsum quibusdam libero iste amet. Saepe quod cum ducimus deleniti quisquam porro harum itaque animi dolorem exercitationem! In, amet ducimus.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className='bg-slate-50 rounded-[10px] p-4 shadow sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl'>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta odio iste quae eum magnam expedita voluptatum incidunt corrupti asperiores quidem nemo, nulla officiis doloremque facilis mollitia eaque rem explicabo quibusdam.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  