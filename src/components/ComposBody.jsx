
import React from 'react'
import { HiXMark } from "react-icons/hi2";
import { MdOutlinePayment, MdEdit } from 'react-icons/md';
import BouTon from './BouTon';

export default function ComposBody() {

  //state ///

  const Table = [
    {
      icono: <HiXMark className="text-3xl" />,
      titlte: "Your application is rejected! ",
      text2: ` 
        You submitted on your Letter of Authorization (LOA) is different
        from what is on file with your carrier in their Customer Service
        Record (CSR). A CSR is a copy of how your telephone records
        appear in the telephone company's database.
      `,
      bgColor: 'shad2',
      perso: 'mx-8 perso',
      fond: "rounded-full bg-red-700 w-10 h-10 my-11 flex text-white items-center justify-center",
    },

    {
      icono: <MdEdit className="text-4xl" />,
      titlte: "Your application is rejected! ",
      text2: ` 
        Increase your sales by using special features of Enterprise Membership
      `,
      bouton: <div className='w-4/12 mt-6 max-lg:w-7/12'>
        <div className="w-4/6 m-auto part3">
          <BouTon bouty={'bg-[#343A40] h-14 max-lg:h-10 flex items-center justify-center mb-6 rounded-md	 w-full'}
            contenu={'Edit Service'}
          />
        </div>
      </div>
      ,
      perso: ' w-7/12 perso ms-8 ',
      bgColor: 'shad23',
      fond: "h-32  ",
    }
  ]


  // Comportement //////
  const Table2 = ({ icono, text2, titlte, bouton, bgColor, fond, perso }) => {

    return (
      <div className="mx-8 shad flex items-center mb-6">
        <div className={`${bgColor}`}>
          <button className={`${fond}`}>
            {icono}
          </button>
        </div>
        <div className={`${perso}`}>
          <h3 className="font-bold mb-2">{titlte}</h3>
          <p className="text-sm fonto max-lg:mb-3">{text2}</p>
        </div>
        {/* <div className='max-md:mb-5 '> */}
        {bouton}

      </div>
    )
  }

  const MonMap = () => {
    return (
      <div>
        {
          Table.map((elemo, index) => (
            <Table2 {...elemo} key={index} />
          ))
        }
      </div>
    )
  }

  return (
    <MonMap />
  )
}
