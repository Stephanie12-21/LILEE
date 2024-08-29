

import { Button } from "@/components/ui/button";
import { FaArrowRight } from 'react-icons/fa';

const TextSection = () => {
  return (
    <div className="container mx-auto w-[450px] flex flex-col space-y-5">
      <h1 className="text-[48px] font-semibold">Comment ça marche?</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae amet iure quidem minima quas nostrum illum in eaque provident. Excepturi?</p>
      <div>
        <Button className="h-[45px] w-[137px] text-[18px]  rounded-[10px] flex items-center">
          Cliquer ici
          <FaArrowRight className="ml-2"/>
        </Button>
      </div>
    </div>
  );
};

export default TextSection;
