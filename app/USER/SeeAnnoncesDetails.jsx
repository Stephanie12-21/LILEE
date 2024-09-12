import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { EyeIcon } from "lucide-react";


export function SeeAnnoncesDetails() {
  return (
    <Dialog className="flex justify-between items-center">
      <DialogTrigger asChild>
        <Button className=' text-[16px] rounded-[10px] bg-[#263056] flex items-center'>
            <EyeIcon/>
        </Button>
      </DialogTrigger>
      <DialogContent className="xl:w-[800px] xl:h-[600px] flex flex-col justify-between ">
        <div>
          <DialogHeader>
            <DialogTitle className="text-3xl text-center pt-5">Détails de l'annonce</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col justify-between ml-10 items-start space-y-4 pt-10">
            <p>Catégories</p>
            <p>Prix</p>
            <p>Type</p>
            <p>Date</p>
            <p>Notes</p>
          </div>
        </div>
        <DialogFooter className="flex justify-center pb-10 space-x-10">
          <Button 
          type="submit" 
          className="px-32 bg-transparent text-[#15213D] font-semibold border-[#15213D] border-[2px] hover:bg-[#15213D] hover:text-white">
            Annuler
          </Button>
          <Button type="submit" className="px-32">Ajouter</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
