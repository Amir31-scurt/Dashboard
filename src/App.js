
import React, { useEffect, useState, useRef } from 'react';
import './index.css'

<<<<<<< HEAD
import './CSS/Style-App.css'
import SideBar from './components/SidCompos';
=======
import SideBar from './components/SidCompos';
import './CSS/Style-App.css'
>>>>>>> d2897351a29a47e472ca58562846a7161f154b1b

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



      {/************ NavBar********** */}
      <div className='w-3/4 h-20'>
        <h2>Bonjour</h2>
      </div>
    </div>
  );
}


export default App;
