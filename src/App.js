import { FaAddressBook } from "react-icons/fa6";
import React, { useEffect, useState, useRef } from 'react';
import './index.css'
import SideBar from './components/SidCompos';
import './CSS/Style-App.css'
import NavBar from "./components/NavCompos";

function App(props) {
  //State {etat, donnees dynamiques}//////////////////////


  const barry = 'Hello on est  prêt !!!!'








  // comportement/////////////////////////////////////






  // affichage {render} /////////////
  
  return (
    <div className='flex'>
      <div className='w-1/4 bg-red-400 h-auto'>
        <SideBar/>
      </div>
      <div className='w-3/4 bg-blue-500'>
        <NavBar/>
        <FaAddressBook className="text-4xl text-blue-200"/>
      </div>
    </div>
  );
}



export default App;
