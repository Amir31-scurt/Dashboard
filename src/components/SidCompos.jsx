<<<<<<< HEAD


import { FiMessageSquare, FiUser, FiPieChart, FiSettings } from "react-icons/fi";
import { HiOutlineDocument, HiOutlineViewGrid } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import Menu from "./Menu";
import Elements from "./Utils"
=======
import { AiOutlineBell } from 'react-icons/ai';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import { GrDocument } from 'react-icons/gr';
import { MdPayment } from 'react-icons/md';
import { LuMessageSquare } from 'react-icons/lu';
import { AiOutlinePieChart } from 'react-icons/ai';
import { RiUser3Line } from 'react-icons/ri';
import { MdOutlineSettings } from 'react-icons/md';
>>>>>>> 8694438c0f56cad210d7e0318bc342562c9debd9
export default function SideBar() {
  // state///////////
  const buttons = [
    {
      title: 'Overview',
      icon: <HiOutlineSquares2X2 />,
      id: 1,
    },
    {
      title: 'Documents',
      icon: <GrDocument />,
      id: 2,
    },
    {
      title: 'Payments',
      icon: <MdPayment />,
      id: 3,
    },
    {
      title: 'Messages',
      icon: <LuMessageSquare />,
      id: 4,
    },
    {
      title: 'Report Center',
      icon: <AiOutlinePieChart />,
      id: 5,
    },
  ];
  const buttons2 = [
    {
      title: 'Users',
      icon: <RiUser3Line />,
      id: 6,
    },
    {
      title: 'Settings',
      icon: <MdOutlineSettings />,
      id: 7,
    },
  ];

  // comportement/////////
  const BtnInside = (props) => {
    return (
      <div className="flex-col click">
        <button className="flex my-3 px-8 items-center">
          <span className="me-6 icono py-3">{props.button.icon}</span>
          <h2 className="text-lg font-bold txt">{props.button.title}</h2>
        </button>
      </div>
    );
  };
  const BtnInside2 = (props) => {
    return (
      <div className="flex-col click">
        <button className="flex my-3 px-8 items-center">
          <span className="me-6 icono py-3">{props.button.icon}</span>
          <h2 className="text-lg font-bold txt">{props.button.title}</h2>
        </button>
      </div>
    );
  };
  const BtnList = () => {
    return (
      <div>
        {buttons.map((button) => {
          return <BtnInside button={button} />;
        })}
      </div>
    );
  };
  const BtnList2 = () => {
    return (
      <div>
        {buttons2.map((button) => {
          return <BtnInside2 button={button} />;
        })}
      </div>
    );
  };

  // affichage //////////////
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="flex items-center w-3/4 mt-3">
        <div className="imge">
          <img src="Images/logoBakeli.jpg" className="" alt="" />
        </div>
        <div className="ms-5 nom">
          <h1 className="text-2xl font-bold ms-4">Bakeli</h1>
          <p className="text-sm ms-4 text-gray-500 fonto">
            School of Technology
          </p>
        </div>
      </div>

      {/************* Menu ************/}

<<<<<<< HEAD
      <div className=" mt-10 longuer">

        {/***=========== Main-Menu ===========***/}
        <div className=" flex-col flex gap-2">
          <div className="mb-4">
            <h1 className="text-gray-500 font-bold ">MAIN MENU</h1>
          </div>
          <div className="lex-col flex gap-2 focu">
            <Menu icone={<HiOutlineViewGrid className="me-6 icono" />} text={'Overview'} />
          </div>
          {Elements.map((elem, index) => (<Menu {...elem} key={index} />))}
        </div>

        {/***========== Reference-Menu =========***/}
        <div className="mt-10">
          <h1 className="text-gray-500 font-bold ">PREFERENCES</h1>
        </div>

        <div className="mt-4 flex-col flex gap-2">
          <Menu icone={<FiUser className="me-6 icono" />} text={'Overview'} />
          <Menu icone={<FiSettings className="me-6 icono" />} text={'Overview'} />
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
          <div className="w-4/6 m-auto part3">
            <button className="bg-[#343A40] h-14 flex items-center justify-center mb-6 rounded-md	 w-full">
              <p className="text-white font-bold text-xl pb-1">Upgrade</p>
            </button>
          </div>

=======
      <div className=" mt-10 longuer w-3/4">
        <div className=" flex-col flex gap-1">
          {/*** Main-Menu ***/}
          <div className="cont">
            <h2 className="text-gray-500 font-bold highlight">MAIN MENU</h2>
          </div>
          <BtnList />
        </div>
        {/*** Reference-Menu ***/}
        <div className="flex-col flex gap-1 mt-8">
          <div className="cont">
            <h2 className="text-gray-500 font-bold highlight">PREFERENCES</h2>
          </div>
          <BtnList2 />
        </div>
        {/*** Notice-Menu ***/}
        <div className="">
            
>>>>>>> 8694438c0f56cad210d7e0318bc342562c9debd9
        </div>
      </div>
    </div>
  );
}
