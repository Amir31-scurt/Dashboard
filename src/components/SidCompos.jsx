


import { FiMessageSquare, FiUser, FiPieChart, FiSettings } from "react-icons/fi";
import { HiOutlineDocument, HiOutlineViewGrid } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import Menu from "./Menu";
import Elements from "./Utils"
import BouTon from "./BouTon";


export default function SideBar() {
  // state///////////

  // affichage //////////////
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-3 mt-3">
        <div className="w-1/4 mx-2 max-lg:w-3/5 max-lg:mx-4">
          <img src="Images/logoBakeli.jpg" className="" alt="" />
        </div>
        <div className="nom">
          <h1 className="text-2xl font-bold ms-4">Bakeli</h1>
          <p className="text-sm ms-4 text-gray-500 fonto">
            School of Technology
          </p>
        </div>
      </div>

      {/************* Menu ************/}

      <div className=" mt-10 longuer">

        {/***=========== Main-Menu ===========***/}
        <div className=" flex-col flex gap-2">
          <div className="mb-4">
            <h1 className="text-gray-500 font-bold ">MAIN MENU</h1>
          </div>
          <div className="flex-col flex gap-2 active">
            <Menu icone={<HiOutlineViewGrid className="icono me-6" />} text={'Overview'} />
          </div>
          {Elements.map((elem, index) => (<Menu {...elem} key={index} />))}
        </div>

        {/***========== Reference-Menu =========***/}
        <div className="mt-10">
          <h1 className="text-gray-500 font-bold ">PREFERENCES</h1>
        </div>

        <div className="mt-4 flex-col flex gap-2">
          <Menu icone={<FiUser className="me-6 icono" />} text={'Users'} />
          <Menu icone={<FiSettings className="me-6 icono" />} text={'Settings'} />
        </div>

        {/***========= Notice-Menu =========***/}
        <div className="mt-4 flex-col flex gap-2 bg-yellow-100 mb-10 mono1">
          <div className="flex">
            <div className="w-3/4 m-auto text-center px-12 mt-5 part1">
              <p className="mono">Upgrade to Enterprise Account!</p>
            </div>
            <div className=" w-9 pt-4 partx">
              <HiXMark className="text-2xl" />
            </div>
          </div>

          <div className="w-5/6 m-auto mt-2 part2">
            <p className="pb-3 fonto">Increase your sales by using special features of Enterprise Membership.</p>
          </div>

          {/* Place Bouton  */}
          <div className="w-4/6 m-auto part3">
            <BouTon bouty={'bg-[#343A40] h-14 flex items-center justify-center mb-6 rounded-md movi w-full'}
              contenu={'Upgrade'}
            />
          </div>


        </div>
      </div>
    </div>
  );
}
