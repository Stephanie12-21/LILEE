

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
import Dashboard from './Dashboard';

const User = () => {
  const [selectedPage, setSelectedPage] = useState('Dashboard');

 
  const renderContent = () => {
    switch (selectedPage) {
      case 'Dashboard':
        return <Dashboard />;
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
        return <Dashboard />;
    }
  };

  return (
    <div className=' flex space-x-10 '>
      <div className="w-[20%] bg-red-500">
        <div className='container mx-6 py-10'>
          <p>Espace proprétaire</p>
          <p>Membre depuis 20/10/2024</p>
        </div>
        <SideBar setSelectedPage={setSelectedPage} />
      </div>
      <div className="w-[70%]">
        {renderContent()}
      </div>
    </div>
  )
}

export default User