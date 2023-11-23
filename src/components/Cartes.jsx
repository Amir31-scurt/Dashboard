// Exportation ----------------------///
import { MdCancel } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
function Body() {
  // states
  const cartes = [{}];
  return (
    <div className="">
      <div className="mx-10 py-5 flex flex-col">
        <div className="w-4/5">
          <div className="w-1/3">
            <div className="card rounded-lg bg-gray-200">
              <div className="title p-2">
                <h1>7/24 LIVE HELP</h1>
                <p>Enterprise Solutions</p>
              </div>
              <div className="body">
                <div className="">
                  <img src="Images/img1.png" alt="" />
                </div>
                <div className="">
                  <p>
                    Canned responses are used to answer the questions quickly,
                    but not necessarily the lead to closing a sale.
                  </p>
                  <p>
                    Faster response 
                    <br/>Right tone of language 
                    <br/>Consistency in brand experience
                  </p>
                </div>
              </div>
              <div className="foot flex items-center bg-white">
                <h2>READ MORE</h2>
                <IoIosArrowForward />
              </div>
            </div>
          </div>
          <div className="w-1/3"></div>
          <div className="w-1/3"></div>
        </div>
      </div>
    </div>
  );
}
export default Body;
