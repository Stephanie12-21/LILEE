


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
  const [message, setMessage] = useState('');

  return (
    
    <div className="container mx-auto flex justify-center items-center space-x-10 pt-10 pb-10">
  
      <Card className="w-[600px] h-[700px] shadow sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl flex-grow">
        <CardHeader className="flex items-center">
          <CardTitle className="pt-2 items-center">Prenons contact</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid w-full items-center gap-2">
            <div className="flex space-x-2">
              <div className="space-y-2">
                <Label htmlFor="nom" className="text-right text-[#425466] font-medium text-[16px]">Nom</Label>
                <Input
                  id="nom"
                  placeholder="Nom"
                  className="col-span-3 items-start w-[265px] bg-[#edf2f7] text-[15px] text-[#27272E] font-medium"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="prenom" className="text-right text-[#425466] font-medium text-[16px]">Prénom</Label>
                <Input
                  id="prenom"
                  placeholder="Prénom"
                  className="col-span-3 items-start w-[265px] bg-[#edf2f7] text-[15px] text-[#27272E] font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-right text-[#425466] font-medium text-[16px]">Votre adresse email</Label>
              <Input
                id="email"
                placeholder="email@gmail.com"
                className="col-span-3 items-start w-full bg-[#edf2f7] text-[15px] text-[#27272E] font-medium"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="num" className="text-right text-[#425466] font-medium text-[16px]">Votre numéro de téléphone</Label>
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

            <div className="flex flex-col space-y-2">
              <Label htmlFor="objet" className="text-[#425466] font-medium text-[16px]">Objet</Label>
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

            <div className="space-y-2">
              <Label htmlFor="message" className="text-right text-[#425466] font-medium text-[16px]">Votre message</Label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Écrivez votre message ici"
                className="col-span-3 w-full h-32 bg-[#edf2f7] text-[15px] text-[#27272E] font-medium p-2 rounded-md"
              />
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex py-2 items-center mx-40">
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

      {/* image google map */}
      <div className="relative w-[600px] h-[700px] flex-grow">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.4757995109226!2d3.8222888756976987!3d43.617455054742706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6afc85016162d%3A0x196b4165c87eb3f9!2sLilee!5e0!3m2!1sfr!2smg!4v1725788916061!5m2!1sfr!2smg"
          width="600"
          height="700"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

    </div>

  );
};

export default Contact;
