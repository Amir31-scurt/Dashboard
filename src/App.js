// import { FaAddressBook } from "react-icons/fa6";
import React, { useEffect, useState, useRef } from 'react';
import {
  FiMessageSquare,
  FiUser,
  FiPieChart,
  FiSettings,
} from 'react-icons/fi';
import { MdOutlinePayment, MdEdit } from 'react-icons/md';

import './index.css';
import SideBar from './components/SidCompos';
import './CSS/Style-App.css';
import NavBar from './components/NavCompos';
import { HiXMark } from 'react-icons/hi2';
import Body from './components/Cartes';

function App() {
  //State {etat, donnees dynamiques}/////

  // comportement///////////////////

  // affichage {render} /////////////

  return (
    <div className="flex h-full">
      {/************ SidBar********** */}

      <div className="w-1/4 h-auto route border-r-2 border-gray-300 ">
        <SideBar />
      </div>

      <div className="w-3/4">
        {/********NavBar**********/}
        <div className=" bg-white-500 border-b-2 border-gray-300 h-22">
          <NavBar />
        </div>

        {/********* ConTenu Page **********/}
        <div className="documo pt-7">
          <div className="ms-8">
            <p className="fonto font-bold text-xl text-[#444]">Overview</p>
          </div>

          <div className="w-5/12 ms-8 my-8 flex moto">
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

          <div className="ms-8 h-32 w-11/12 shad flex items-center">
            <div className="shad2 w-4/12">
              <button className="rounded-full bg-red-700 text-white w-10 h-10 flex items-center justify-center">
                <HiXMark className="text-3xl" />
              </button>
            </div>
            <div className="mx-8">
              <h3 className="font-bold mb-2">Your application is rejected! </h3>
              <p className="text-sm fonto">
                You submitted on your Letter of Authorization (LOA) is different
                from what is on file with your carrier in their Customer Service
                Record (CSR). A CSR is a copy of how your telephone records
                appear in the telephone company's database.
              </p>
            </div>
          </div>

          <div className="ms-8 h-32 w-11/12 shad flex items-center mt-7">
            <div className="shad23 w-2/12">
              <MdEdit className="text-4xl" />
            </div>
            <div className="mx-8 w-7/12">
              <h3 className="font-bold mb-2">Edit Your Service</h3>
              <p className="text-sm fonto">
                You may edit your service and then send it for the approval.
              </p>
            </div>

            <div className="w-2/12 part3 mt-4">
              <button className="bg-[#343A40] h-14 flex items-center justify-center mb-6 rounded-md	 w-full">
                <p className="text-white font-bold text-xl pb-1">Upgrade</p>
              </button>
            </div>
          </div>
          <Body/>
        </div>
      </div>
    </div>
  );
}

export default App;
