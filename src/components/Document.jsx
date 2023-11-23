// Exportation ----------------------///
import { MdCancel } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
function Body() {
  // states
  const cartes = [{}];
  return (
    <div className="bg-gray-100">
      <div className="mx-10 py-5 flex flex-col">
        <h1 className="font-bold mb-3 text-xl">Overview</h1>
        <div className="flex gap-10">
          <div className="">
            <img src="Images/Ellipse 1.png" className="w-16" />
          </div>
          <div className="">
            <h1 className="text-lg font-medium">Blaze | Service Main</h1>
            <p className="text-gray-500 text-sm font-medium">
              Created: 24/02/2019
            </p>
          </div>
          <div className="">
            <button className="text-red-500 flex items-center gap-1">
              <MdCancel className="text-3xl" />
              <p className="font-medium">REJECTED</p>
            </button>
          </div>
        </div>
        <div className="mt-5">
          <div className="parentPaysaCard flex flex-col gap-4">
            <div className="flex items-center bg-white rounded-lg drop-shadow-md">
              <div className="hold bg-red-200 flex rounded-l-lg py-5">
                <MdCancel className="text-3xl text-red-500 mx-auto my-6" />
              </div>
              <div className="mx-4 band">
                <h1 className="font-medium">Your application is rejected! </h1>
                <h1>
                  You submitted on your Letter of Authorization (LOA) is
                  different from what is on file with your carrier in their
                  Customer Service Record (CSR). A CSR is a copy of how your
                  telephone records appear in the telephone company’s database.
                </h1>
              </div>
            </div>
            <div className="flex items-center bg-white rounded-lg drop-shadow-md">
              <div className="hold bg-blue-200 flex rounded-l-lg py-5">
                <MdEdit className="text-3xl mx-auto my-6" />
              </div>
              <div className="mx-4 band">
                <h1 className="font-medium">Edit Your Service</h1>
                <h1>
                  You may edit your service and then send it for the approval.
                </h1>
              </div>
            </div>
            <div></div>
          </div>
        </div>
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
