import { SelectSection } from "./SelectSection";


  

const SearchSection = () => {
  return (
    <div className="border-2 border-white rounded-lg p-4">
        <div className='container mx-auto flex justify-between items-center gap-x-9'>
            <p>Destination</p>
            <p>Durée</p>
            <p>Locataires</p>
            <SelectSection/>
            
            
            
        </div>
    </div>
  );
};

export default SearchSection;
