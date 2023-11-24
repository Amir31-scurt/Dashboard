// import { FaAddressBook } from "react-icons/fa6";
import React, { useEffect, useState, useRef } from 'react';
import { MdOutlinePayment, MdEdit } from 'react-icons/md';

import './index.css';
import SideBar from './components/SidCompos';
import './CSS/Style-App.css';
import NavBar from './components/NavCompos';
import { HiXMark } from 'react-icons/hi2';
import Body from './components/Cartes';
import ComposBody from './components/ComposBody';
// import BouTon from './components/BouTon';


function App() {
  return (
    <div className="flex h-full">
      {/************ SidBar********** */}

      <div className="w-1/4 max-lg:w-1/6 h-auto route border-r-2 border-gray-300 ">
        <SideBar />
      </div>

      <div className="w-3/4 max-lg:w-5/6">
        {/********NavBar**********/}
        <div className=" bg-white-500 border-b-2 border-gray-300 h-22">
          <NavBar />
        </div>

        {/********* ConTenu Page **********/}
        <div className="documo pt-7">
          <div className="mx-8">
            <p className="fonto font-bold text-xl text-[#444]">Overview</p>
          </div>

          <div className="w-5/12 mx-8 my-8 flex moto">
            <div className="flex items-center w-3/4 mt-3">
              <div className="imge">
                <img
                  src="Images/ellipse1.jpg"
                  className="rounded-full"
                  alt=""
                />
              </div>
              <div className="ms-5 moto2">
                <h2 className="text-2xl font-bold mb-3 ms-4">
                  Blaze | Service Main
                </h2>
                <p className="text-sm ms-4 text-gray-500 fonto">
                  Created: 24/02/2019
                </p>
              </div>
            </div>

            <div className=" mb-4 ms-4 flex items-center justify-center moto3">
              <button className="rounded-full bg-red-700 text-white p-1">
                <HiXMark />
              </button>
              <p className="text-red-700 font-bold ms-2">REJECTED</p>
            </div>
          </div>

          {/* Place ////////////////l */}
          <ComposBody/>

          <Body/>

        </div>
      </div>
    </div>
  );
}

export default App;
