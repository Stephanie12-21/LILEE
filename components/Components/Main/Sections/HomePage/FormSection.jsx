import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionDate } from "./SectionDate";

// Importation des icônes depuis react-icons
import { FaSlidersH, FaSearch } from "react-icons/fa";
import { SettingSection } from "./SettingSection";

export function FormSection() {
  return (
    <form>
      <div className="w-full flex flex-col justify-between lg:flex-row lg:gap-4">
        {/* destination */}
        <div className="flex flex-col space-y-1.5 w-full lg:w-1/3">
          <Label htmlFor="lieu">Lieu</Label>
          <Input id="lieu" placeholder="Préciser le lieu souhaité " className='w-[400px] h-12' />
        </div>

        {/* durée */}
        <div className="flex flex-col space-y-1.5 w-full lg:w-1/3 mt-2 lg:mt-0">
          <Label htmlFor="duration">Durée</Label>
          <SectionDate />
        </div>

        {/* locataire */}
        <div className="flex flex-col space-y-1.5 w-full lg:w-1/3 mt-2 lg:mt-0">
          <Label htmlFor="bénéficiaires">Bénéficiaires</Label>
          <Select>
            <SelectTrigger id="bénéficiaires" className='w-[400px] h-12'>
              <SelectValue placeholder="Combien serez-vous?" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="next">Adultes</SelectItem>
              <SelectItem value="sveltekit">Enfants</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* boutons */}
        <div className="flex flex-col md:flex-row gap-4 mt-8 md:mt-5 w-full md:w-auto md:ml-auto">
          
            <SettingSection/>
            
         
          <Button 
            className="flex items-center justify-center p-2 w-12 h-12 text-lg "
          >
            <FaSearch className="text-2xl" />
          </Button>
        </div>
      </div>
    </form>
  );
}
