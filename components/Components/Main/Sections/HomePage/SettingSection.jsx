

import { FaSlidersH } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

export function SettingSection() {
  return (
    <Dialog className="flex justify-between items-center">
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center justify-center p-2 w-12 h-12 text-lg">
          <FaSlidersH className="text-2xl" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[800px] h-[600px] flex flex-col justify-between">
        <div>
          <DialogHeader>
            <DialogTitle className="text-3xl text-center pt-5">Paramètres avancés</DialogTitle>
          </DialogHeader>
          <div>
            
          </div>
        </div>
        <DialogFooter className="flex justify-center pb-10 space-x-10">
          <Button type="submit" className="w-[200px]">Rechercher</Button>
          <Button type="submit" className="w-[200px]">Rechercher</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
