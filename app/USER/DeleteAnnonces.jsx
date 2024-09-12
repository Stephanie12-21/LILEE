// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Trash2 } from "lucide-react"


// export function DeleteAnnonces() {
//   return (
//     <Dialog className="flex justify-between items-center">
//       <DialogTrigger asChild>
//         <Button className='px-5 py-4 text-[16px] rounded-[10px] bg-[#FC1111] hover:bg-[#FC1111] flex items-center'>
//         <Trash2 />
//         </Button>
//       </DialogTrigger>
//       <DialogContent className="xl:w-[800px] xl:h-[600px] flex flex-col justify-between ">
//         <p>Voulez-vous vraiment supprimer cette annonce?</p>
//         <DialogFooter className="flex justify-center pb-10 space-x-10">
//           <Button 
//           type="submit" 
//           className="px-32 bg-transparent text-[#15213D] font-semibold border-[#15213D] border-[2px] hover:bg-[#15213D] hover:text-white">
//             Annuler
//           </Button>
//           <Button type="submit" className="px-32">Supprimer</Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   )
// }
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
import { Trash2 } from "lucide-react"

export function DeleteAnnonces() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='px-5 py-4 text-[16px] rounded-[10px] bg-[#FC1111] hover:bg-[#FC1111] flex items-center'>
          <Trash2 />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[400px] p-6">
        <p className="text-center">Voulez-vous vraiment supprimer cette annonce?</p>
        <DialogFooter className="flex justify-center gap-4 mt-4">
          <Button 
            type="button" 
            className="px-6 py-2 bg-transparent text-[#15213D] font-semibold border-[#15213D] border-[2px] hover:bg-[#15213D] hover:text-white">
            Annuler
          </Button>
          <Button type="button" className="px-6 py-2 bg-[#FC1111] text-white hover:bg-[#d11212]">Supprimer</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
