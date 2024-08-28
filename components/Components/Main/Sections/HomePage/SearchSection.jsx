
import * as React from "react"
import { FormSection } from "./FormSection";

const SearchSection = () => {
  return (
    <div className="border-2 border-white rounded-lg p-4">
        <div className='container mx-auto flex justify-between items-center gap-x-9'>
            <FormSection/>
        </div>
    </div>
  );
};

export default SearchSection;
