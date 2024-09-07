

"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { CheckIcon, ChevronRightIcon } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { AnimatedSubscribeButton } from '@/components/magicui/animated-subscribe-button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Contact = () => {
  const [phone, setPhone] = useState('');

  return (
    <div className="container mx-auto flex justify-center items-center space-x-10 pt-10 pb-10">
      <div>
        <Card className="w-[600px] h-[600px] shadow sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl">
          <CardHeader className="flex items-center">
            <CardTitle className="pt-5 items-center">Prenons contact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-7">
              {/* Inputs pour Nom et Prénom côte à côte */}
              <div className="flex space-x-4">
                <div className="space-y-2">
                  <Label htmlFor="nom" className="text-right text-[#425466] font-medium text-[16px]">
                    Nom
                  </Label>
                  <Input
                    id="nom"
                    placeholder="Nom"
                    className="col-span-3 items-start w-[265px] bg-[#edf2f7] text-[15px] text-[#27272E] font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="prenom" className="text-right text-[#425466] font-medium text-[16px]">
                    Prénom
                  </Label>
                  <Input
                    id="prenom"
                    placeholder="Prénom"
                    className="col-span-3 items-start w-[265px] bg-[#edf2f7] text-[15px] text-[#27272E] font-medium"
                  />
                </div>
              </div>

              {/* Input pour l'email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-right text-[#425466] font-medium text-[16px]">
                  Votre adresse email
                </Label>
                <Input
                  id="email"
                  placeholder="email@gmail.com"
                  className="col-span-3 items-start w-full bg-[#edf2f7] text-[15px] text-[#27272E] font-medium"
                />
              </div>

              {/* Input pour numéro de téléphone avec sélection du code pays */}
              <div className="space-y-2">
                <Label htmlFor="num" className="text-right text-[#425466] font-medium text-[16px]">
                  Votre numéro de téléphone
                </Label>
                <PhoneInput
                  country={'fr'}
                  value={phone}
                  onChange={setPhone}
                  placeholder="Entrez votre numéro"
                  inputStyle={{ width: '100%', height:'40px' }}
                  buttonClass="custom-flag-style" 
                  inputClass="col-span-3 items-start w-full bg-[#edf2f7] text-[15px] text-[#27272E] font-medium"
                />
              </div>

              {/* Select pour l'objet */}
              <div className="flex flex-col space-y-2">
                <Label htmlFor="objet" className="text-[#425466] font-medium text-[16px]">
                  Objet
                </Label>
                <Select>
                  <SelectTrigger id="objet">
                    <SelectValue placeholder="Selectionner l'objet de votre message" className="bg-[#edf2f7] text-[15px] text-[#27272E]" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="partenariat">Demande de partenariat</SelectItem>
                    <SelectItem value="donation">Faire une donation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex pt-5 items-center mx-40">
            <AnimatedSubscribeButton
              buttonColor="#15213D"
              buttonTextColor="#ffffff"
              subscribeStatus={false}
              initialText={
                <span className="group inline-flex items-center">
                  Envoyer{' '}
                  <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              }
              changeText={
                <span className="group inline-flex items-center">
                  <CheckIcon className="mr-2 h-4 w-4" />
                  Message envoyé{' '}
                </span>
              }
            />
          </CardFooter>
        </Card>
      </div>

      <div className="relative w-[600px] h-[600px]">
        <Image src="/info/map.svg" width={600} height={600} alt="Map" />
        <Image
          src="/info/icon.svg"
          width={50}
          height={50}
          alt="Icon"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default Contact;
