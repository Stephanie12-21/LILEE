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


// export function AddAnnonces() {
//   return (
//     <Dialog className="flex justify-between items-center">
//       <DialogTrigger asChild>
//       <Button className='px-5 py-4 text-[16px] rounded-[10px] bg-[#263056] flex items-center'>
//             Ajouter une annonce
//         </Button>
//       </DialogTrigger>
//       <DialogContent className="xl:w-[800px] xl:h-[600px] flex flex-col justify-between ">
//         <div>
//           <DialogHeader>
//             <DialogTitle className="text-3xl text-center pt-5">Paramètres avancés</DialogTitle>
//           </DialogHeader>
//           <div className="flex flex-col justify-between ml-10 items-start space-y-4 pt-10">
//             <p>Catégories</p>
//             <p>Prix</p>
//             <p>Type</p>
//             <p>Date</p>
//             <p>Notes</p>
//           </div>
//         </div>
//         <DialogFooter className="flex justify-center pb-10 space-x-10">
//           <Button 
//           type="submit" 
//           className="px-32 bg-transparent text-[#15213D] font-semibold border-[#15213D] border-[2px] hover:bg-[#15213D] hover:text-white">
//             Annuler
//           </Button>
//           <Button type="submit" className="px-32">Ajouter</Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   )
// }

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function AddAnnonces({ ajouterAnnonce }) {
  const [titre, setTitre] = useState('');
  const [prix, setPrix] = useState('');
  const [localisation, setLocalisation] = useState('');

  const handleAjouter = () => {
    const nouvelleAnnonce = {
      titre,
      prix,
      localisation,
    };
    ajouterAnnonce(nouvelleAnnonce);
  };

  return (
    <Dialog className="flex justify-between items-center">
      <DialogTrigger asChild>
        <Button className='px-5 py-4 text-[16px] rounded-[10px] bg-[#263056] flex items-center'>
          Ajouter une annonce
        </Button>
      </DialogTrigger>
      <DialogContent className="xl:w-[800px] xl:h-[600px] flex flex-col justify-between ">
        <div>
          <DialogHeader>
            <DialogTitle className="text-3xl text-center pt-5">Paramètres avancés</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col justify-between ml-10 items-start space-y-4 pt-10">
            <p>Catégories</p>
            <input
              type="text"
              placeholder="Titre"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
            />
            <input
              type="text"
              placeholder="Prix"
              value={prix}
              onChange={(e) => setPrix(e.target.value)}
            />
            <input
              type="text"
              placeholder="Localisation"
              value={localisation}
              onChange={(e) => setLocalisation(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter className="flex justify-center pb-10 space-x-10">
          <Button
            type="button"
            className="px-32 bg-transparent text-[#15213D] font-semibold border-[#15213D] border-[2px] hover:bg-[#15213D] hover:text-white"
            onClick={() => {
              
            }}
          >
            Annuler
          </Button>
          <Button
            type="button"
            className="px-32"
            onClick={handleAjouter}
          >
            Ajouter
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

