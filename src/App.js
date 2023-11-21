
import React, { useEffect, useState, useRef } from 'react';
import './index.css'

function App(props) {
  //State {etat, donnees dynamiques}//////////////////////


  const barry = 'Hello on est  prêt !!!!'








  // comportement/////////////////////////////////////






  // affichage {render} /////////////
  
  return (
    <div>
      <h1 className="text-3xl font-bold">{props.titre} </h1>
      <h2 className="text-black-800 bg-red-800 mt-8">{barry} </h2>
    </div>
  );
}

export default App;
