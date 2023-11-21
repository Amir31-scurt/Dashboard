import { FaAddressBook } from "react-icons/fa6";
import React, { useEffect, useState, useRef } from 'react';
import './index.css'
import SideBar from './components/SidCompos';
import './CSS/Style-App.css'
import NavBar from "./components/NavCompos";



function App() {
  //State {etat, donnees dynamiques}//////////////////////





  // comportement/////////////////////////////////////






  // affichage {render} /////////////
  
  return (
    <div className='flex'>
      {/************ SidBar********** */}
      <div className='w-1/4 h-auto route border-r-2 border-gray-300'>
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
