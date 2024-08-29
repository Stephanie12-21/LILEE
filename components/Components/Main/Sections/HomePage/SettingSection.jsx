// // import { FaSlidersH } from "react-icons/fa";
// // import {
// //     Dialog,
// //     DialogContent,
// //     DialogDescription,
// //     DialogFooter,
// //     DialogHeader,
// //     DialogTitle,
// //     DialogTrigger,
// //   } from "@/components/ui/dialog";
  
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // import { Button } from "@/components/ui/button"

// // export function SettingSection() {
// //   return (
// //     <Dialog>
// //       <DialogTrigger asChild>
// //         <Button variant="outline" className="flex items-center justify-center p-2 w-12 h-12 text-lg ">
// //           <FaSlidersH className="text-2xl" />
          
// //         </Button>
// //       </DialogTrigger>
// //       <DialogContent className="sm:max-w-[425px]">
// //         <DialogHeader>
// //           <DialogTitle className='text-3xl items-center'>
// //             Donner plus de détails pour plus de précisions
// //           </DialogTitle>
// //           <DialogDescription>
// //             Make changes to your profile here. Click save when you're done.
// //           </DialogDescription>
// //         </DialogHeader>
// //         <div className="grid gap-4 py-4">
// //           <div className="grid grid-cols-4 items-center gap-4">
// //             <Label htmlFor="name" className="text-right">
// //               Name
// //             </Label>
// //             <Input
// //               id="name"
// //               defaultValue="Pedro Duarte"
// //               className="col-span-3"
// //             />
// //           </div>
// //           <div className="grid grid-cols-4 items-center gap-4">
// //             <Label htmlFor="username" className="text-right">
// //               Username
// //             </Label>
// //             <Input
// //               id="username"
// //               defaultValue="@peduarte"
// //               className="col-span-3"
// //             />
// //           </div>
// //         </div>
// //         <DialogFooter>
// //           <Button type="submit">Save changes</Button>
// //         </DialogFooter>
// //       </DialogContent>
// //     </Dialog>
// //   );
// // }


// import { FaSlidersH } from "react-icons/fa";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";

// export function SettingSection() {
//   return (
//     <Dialog className='flex justify-between items-center' >
//       <DialogTrigger asChild>
//         <Button variant="outline" className="flex items-center justify-center p-2 w-12 h-12 text-lg">
//           <FaSlidersH className="text-2xl" />
//         </Button>
//       </DialogTrigger>
//       <DialogContent className=" w-[700px] h-[600px]">
//         <DialogHeader>
//           <DialogTitle className="text-3xl ">
//             Paramètres avancés
//           </DialogTitle>
          
//         </DialogHeader>
//         <div className="grid gap-4 py-4">
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="name" className="text-right">
//               Name
//             </Label>
//             <Input
//               id="name"
//               defaultValue="Pedro Duarte"
//               className="col-span-3"
//             />
//           </div>
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="username" className="text-right">
//               Username
//             </Label>
//             <Input
//               id="username"
//               defaultValue="@peduarte"
//               className="col-span-3"
//             />
//           </div>
//         </div>
//         <DialogFooter className="flex justify-center">
//           <Button type="submit" className="mx-auto my-[-10px] w-[450px]">Save changes</Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }

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

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
            <DialogTitle className="text-3xl">Paramètres avancés</DialogTitle>
          </DialogHeader>
          <div>
            
          </div>
        </div>
        <DialogFooter className="flex justify-center">
          <Button type="submit" className="w-[450px]">Enregistrer</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
