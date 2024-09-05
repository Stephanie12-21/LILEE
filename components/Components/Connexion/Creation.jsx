"use client";

import { toast, Toaster } from "sonner"

import { Button } from "@/components/ui/button"

export function Creation() {
  return (
    <>
    <Toaster position="top-right" />
     <Button
      className="px-5 rounded-[10px] text-[16px] text-white font-semibold bg-transparent border-[1px]  hover:bg-transparent hover:text-white" 
      variant="outline"
      onClick={() =>
        toast("", {
          description: "Pour pouvoir déposer une annonce et se satisfaire pleinement des fonctionalités du site, il faut d'abord accéder à votre espace utilisateur.",
          action: {
            label: "Très bien, d'accord",
            className: "text-blue-500 hover:text-blue-700 underline font-semibold",
          },
        })
      }
    >
      Déposer une annonce
    </Button>
    </>
   
  )
}


