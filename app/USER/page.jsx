

"use client";
import React from 'react'
import SideBar from './SideBar'

import { useState } from 'react';
import Annonces from './Annonces';
import Compte from './Compte';
import Reservations from './Reservations';
import Paiements from './Paiements';
import Favoris from './Favoris';
import Message from './Message';

const User = () => {
  const [selectedPage, setSelectedPage] = useState('Annonces');

 
  const renderContent = () => {
    switch (selectedPage) {
      case 'Annonces':
        return <Annonces />;
      case 'Réservations':
        return <Reservations />;
      case 'Messages':
        return <Message/>
      case 'Paiements':
        return <Paiements/>;
      case 'Favoris':
        return <Favoris />;
      case 'Compte':
        return <Compte/>;
      default:
        return <Annonces />;
    }
  };

  return (
    <div className=' flex space-x-10 '>
      <div className="w-[20%] bg-red-500">
        <SideBar setSelectedPage={setSelectedPage} />
      </div>
      <div className="w-[70%]">
        {renderContent()}
      </div>
    </div>
  )
}

export default User