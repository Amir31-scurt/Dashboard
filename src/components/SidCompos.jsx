import { AiOutlineBell } from 'react-icons/ai';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import { GrDocument } from 'react-icons/gr';
import { MdPayment } from 'react-icons/md';
import { LuMessageSquare } from 'react-icons/lu';
import { AiOutlinePieChart } from 'react-icons/ai';
import { RiUser3Line } from 'react-icons/ri';
import { MdOutlineSettings } from 'react-icons/md';
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
            
        </div>
      </div>
    </div>
  );
}
