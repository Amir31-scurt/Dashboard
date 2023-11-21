
import { AiOutlineBell } from "react-icons/ai";
export default function SideBar() {
  // state///////////

  // comportement/////////

  // affichage //////////////
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="flex items-center w-3/4 mt-3">
        <div className="imge">
          <img src="Images/logoBakeli.jpg" className="" alt="" />
        </div>
        <div className="ms-5 nom">
          <h1 className="text-2xl font-bold ms-4">Bakeli</h1>
          <p className="text-sm ms-4 text-gray-500 fonto">School of Technology</p>
        </div>
      </div>

      {/************* Menu ************/}

      <div className=" mt-10 longuer w-3/4">

        <div className=" flex-col flex gap-2">{/*** Main-Menu ***/}
          <div className="mb-4">
            <h1 className="text-gray-500 font-bold ">MAIN MENU</h1>
          </div>

          <div className="flex-col click">
            <button className="flex my-4 px-6 items-center ">
              <AiOutlineBell className="me-6 icono" />
              <h2 className="text-xl font-bold ">Overview</h2>
            </button>
          </div>

          <div className="flex-col click">
            <button className="flex my-4 px-6 items-center ">
              <AiOutlineBell className="me-6 icono" />
              <h2 className="text-xl font-bold ">Overview</h2>
            </button>
          </div>

          <div className="flex-col click">
            <button className="flex my-4 px-6 items-center ">
              <AiOutlineBell className="me-6 icono" />
              <h2 className="text-xl font-bold ">Overview</h2>
            </button>
          </div>

          <div className="flex-col click">
            <button className="flex my-4 px-6 items-center ">
              <AiOutlineBell className="me-6 icono" />
              <h2 className="text-xl font-bold ">Overview</h2>
            </button>
          </div>

   
        </div>


        <div className="">{/*** Reference-Menu ***/}

        </div>


        <div className="">{/*** Notice-Menu ***/}

        </div>
      </div>

    </div>
  )
}