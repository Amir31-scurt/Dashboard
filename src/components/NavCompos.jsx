import { FaMagnifyingGlass } from "react-icons/fa6";
import { AiOutlineBell } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
function NavBar() {
  // state///////////

  // comportement/////////

  // affichage //////////////

  return (
    <header className=" flex items-center justify-center h-20">
      <nav className="flex flex-cols justify-between w-11/12">
        <div className="flex gap-4 items-center">
          <FaMagnifyingGlass className="text-gray-500" />
          <input type="text" placeholder="Search Data" className="w-28 inp" />
        </div>
        <div className="flex gap-8 items-center">
          <AiOutlineBell className="cloche" />
          <div className="flex items-center gap-4">
            <img src="Images/image.jpg" alt="" className="w-12 rounded-full" />
            <h2 className="inp">Kalika</h2>
          </div>
          <IoIosArrowDown className="cloche" />
        </div>
      </nav>
    </header>
  )

}

export default NavBar;