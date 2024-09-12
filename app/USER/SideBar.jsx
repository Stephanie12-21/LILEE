
import React from 'react';
import { HiOutlineSpeakerphone, HiOutlineCalendar, HiOutlineCreditCard, HiOutlineHeart, HiOutlineUser, HiOutlineMail, HiOutlineHome } from 'react-icons/hi';  // Importation des icônes outline

const SideBar = ({ setSelectedPage }) => {
  return (
    
      <div className=" ml-10 flex flex-col items-start pb-10 space-y-4">
        <button onClick={() => setSelectedPage('Dashboard')} className="flex items-center space-x-3">
          <HiOutlineHome size={24} /> 
          <span>Tableau de bord</span>
        </button>

        <button onClick={() => setSelectedPage('Annonces')} className="flex items-center space-x-3">
          <HiOutlineSpeakerphone size={24} /> 
          <span>Annonces</span>
        </button>

        <button onClick={() => setSelectedPage('Réservations')} className="flex items-center space-x-3">
          <HiOutlineCalendar size={24} />  
          <span>Réservations</span>
        </button>

        <button onClick={() => setSelectedPage('Messages')} className="flex items-center space-x-3">
          <HiOutlineMail size={24} /> 
          <span>Messages</span>
        </button>

        <button onClick={() => setSelectedPage('Paiements')} className="flex items-center space-x-3">
          <HiOutlineCreditCard size={24} />  
          <span>Paiements</span>
        </button>

        <button onClick={() => setSelectedPage('Favoris')} className="flex items-center space-x-3">
          <HiOutlineHeart size={24} />  
          <span>Favoris</span>
        </button>

        <button onClick={() => setSelectedPage('Compte')} className="flex items-center space-x-3">
          <HiOutlineUser size={24} />  
          <span>Compte</span>
        </button>
      </div>
    
  );
}

export default SideBar;

