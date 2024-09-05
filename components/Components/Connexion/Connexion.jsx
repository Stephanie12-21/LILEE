

"use client";
import { useState } from "react";
import { EyeOff, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export function Connexion() {
  const [isPasswordVisible, setPasswordVisible] = useState(false); // État pour gérer la visibilité du mot de passe
  const [isRegister, setIsRegister] = useState(false); // État pour gérer quel formulaire afficher

  // Fonction pour basculer la visibilité du mot de passe
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  // Fonction pour basculer entre connexion et inscription
  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <Dialog className="border-none">
      <DialogTrigger asChild>
        <Button className="px-5 rounded-[10px] text-[16px] font-semibold bg-transparent border-[1px] hover:border-none">
          {isRegister ? "Se connecter" : "Se connecter"}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[1000px] h-[600px] flex flex-col justify-between">
        <div className="flex items-center space-x-10">
          {/* Image à gauche */}
          <Image src="/assets/aside.svg" width={453} height={453} className="sm:rounded-lg p-0" />

          {/* Formulaire */}
          {!isRegister ? (
            <div className="flex flex-col justify-center items-start space-y-4">
              <div className="space-y-2 pb-10">
                <h1 className="text-[#27272E] text-[28px] font-semibold">Se connecter</h1>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-right text-[#425466] font-medium text-[16px]">Votre adresse email</Label>
                <Input
                  id="email"
                  placeholder="email@gmail.com"
                  className="col-span-3 items-start w-[418px] bg-[#edf2f7] text-[15px] text-[#27272E] font-medium"
                />
              </div>

              {/* Input mot de passe avec icône */}
              <div className="space-y-2 relative">
                <Label htmlFor="password" className="text-right text-[#425466] font-medium text-[16px]">Votre mot de passe</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="*******"
                    className="col-span-3 items-start w-[418px] bg-[#edf2f7] pr-10 text-[15px] text-[#27272E] font-medium"
                  />
                  <div className="absolute inset-y-0 right-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
                    {isPasswordVisible ? <Eye className="w-5 h-5 text-gray-600" /> : <EyeOff className="w-5 h-5 text-gray-600" />}
                  </div>
                </div>
              </div>

              <div className="flex pl-72 underline text-[14px] text-[#777E90]">
                <Link href="/">Mot de passe oublié?</Link>
              </div>

              <Button type="submit" className="px-40 py-4 rounded-[10px] text-[16px] font-bold text-[#FCFCFD]">
                Se connecter
              </Button>

              <div className="flex flex-col items-center px-24 space-y-3 justify-center">
                <p>ou faites-le via d'autres comptes</p>
                <div className="flex items-center justify-between space-x-4">
                  <Link href="/"> <Image src="/icons/google.svg" width={52} height={52}/></Link>
                  <Link href="/"> <Image src="/icons/apple.svg" width={52} height={52}/></Link>
                  <Link href="/"> <Image src="/icons/facebook.svg" width={52} height={52}/></Link>
                </div>
              </div>

              <div className="flex mx-auto items-center justify-between space-x-3">
                <p className="text-[#718096] ">Vous êtes nouveau?</p>
                <button onClick={toggleForm} className="text-[#182135]  font-semibold hover:underline">Inscrivez-vous</button>
              </div>
            </div>
          ) : (
            // Formulaire d'inscription à styliser
            <div className="flex flex-col justify-center items-start space-y-2 ">
              <div className="space-y-2 pb-5">
                <h1 className="text-[#27272E] text-[28px] font-semibold">Créez votre compte.</h1>
              </div>

              {/* Inputs pour Nom et Prénom côte à côte */}
                <div className="flex space-x-4">
                  <div className="space-y-2">
                    <Label htmlFor="nom" className="text-right text-[#425466] font-medium text-[16px]">Nom</Label>
                    <Input
                      id="nom"
                      placeholder="Nom"
                      className="col-span-3 items-start w-[200px] bg-[#edf2f7] text-[15px] text-[#27272E] font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="prenom" className="text-right text-[#425466] font-medium text-[16px]">Prénom</Label>
                    <Input
                      id="prenom"
                      placeholder="Prénom"
                      className="col-span-3 items-start w-[200px] bg-[#edf2f7] text-[15px] text-[#27272E] font-medium"
                    />
                  </div>
                </div>
              
              {/* Input pour l'email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-right text-[#425466] font-medium text-[16px]">Votre adresse email</Label>
                  <Input
                    id="email"
                    placeholder="email@gmail.com"
                    className="col-span-3 items-start w-[418px] bg-[#edf2f7] text-[15px] text-[#27272E] font-medium"
                  />
                </div>

              {/* Input mot de passe avec icône */}
              <div className="space-y-2 relative">
                <Label htmlFor="password" className="text-right text-[#425466] font-medium text-[16px]">Votre mot de passe</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="*******"
                    className="col-span-3 items-start w-[418px] bg-[#edf2f7] pr-10 text-[15px] text-[#27272E] font-medium"
                  />
                  <div className="absolute inset-y-0 right-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
                    {isPasswordVisible ? <Eye className="w-5 h-5 text-gray-600" /> : <EyeOff className="w-5 h-5 text-gray-600" />}
                  </div>
                </div>
              </div>

              {/* Confirmation du mot de passe */}
              <div className="space-y-2 relative">
                <Label htmlFor="password" className="text-right text-[#425466] font-medium text-[16px]">Confirmez le mot de passe</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="*******"
                    className="col-span-3 items-start w-[418px] bg-[#edf2f7] pr-10 text-[15px] text-[#27272E] font-medium"
                  />
                  <div className="absolute inset-y-0 right-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
                    {isPasswordVisible ? <Eye className="w-5 h-5 text-gray-600" /> : <EyeOff className="w-5 h-5 text-gray-600" />}
                  </div>
                </div>
              </div>

              <Button type="submit" className="px-44 py-4 rounded-[10px] text-[16px] font-bold text-[#FCFCFD]">
                S' incrire
              </Button>
              <div className="flex flex-col items-center px-24 space-y-3 justify-center">
                <p>ou faites-le via d'autres comptes</p>
                <div className="flex items-center justify-between space-x-4">
                  <Link href="/"> <Image src="/icons/google.svg" width={52} height={52}/></Link>
                  <Link href="/"> <Image src="/icons/apple.svg" width={52} height={52}/></Link>
                  <Link href="/"> <Image src="/icons/facebook.svg" width={52} height={52}/></Link>
                </div>
              </div>

              <div className="flex mx-auto items-center justify-between space-x-3">
                <p className="text-[#718096] ">Vous avez déjà un compte?</p>
                <button onClick={toggleForm} className="text-[#182135]  font-semibold hover:underline">Connectez-vous</button>
              </div>
            </div>


          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
