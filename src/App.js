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

          <div className="mx-8 my-8 flex max-md:flex-col gap-8 max-md:gap-3 flex items-center">
            <div className="flex items-center">
              <div className="">
                <img
                  src="Images/ellipse1.jpg"
                  className="rounded-full"
                  alt=""
                />
              </div>
            </div>

            <div className="flex gap-5 max-md:gap-3 items-start max-md:flex-col max-md:items-center">
              <div className="flex flex-col gap-3 max-md:gap-2 max-md:text-center">
                <h2 className="text-2xl font-bold">
                  Blaze | Service Main
                </h2>
                <p className="text-sm text-gray-500 font-medium">
                  Created: 24/02/2019
                </p>
              </div>
              <button className="flex hover:text-red-600 gap-2 mt-1">
                <HiXMark className="rounded-full bg-red-700 hover:bg-red-600 text-white p-1 text-2xl" />
                <span className="text-red-700 hover:text-red-600 font-bold">REJECTED</span>
              </button>
            </div>
          </div>

          {/* Place ////////////////l */}
          <ComposBody />

          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
