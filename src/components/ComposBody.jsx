import React from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import { MdOutlinePayment, MdEdit } from 'react-icons/md';
import BouTon from './BouTon';

export default function ComposBody() {
  //state ///

  const Table = [
    {
      icono: <IoIosCloseCircle className="text-4xl max-lg:text-2xl" />,
      titlte: 'Your application is rejected! ',
      text2: ` 
        You submitted on your Letter of Authorization (LOA) is different
        from what is on file with your carrier in their Customer Service
        Record (CSR). A CSR is a copy of how your telephone records
        appear in the telephone company's database.
      `,
      bgColor: 'shad2 w-1/6',
      perso: 'mx-8 perso',
      fond: 'text-red-700 h-auto',
    },

    {
      icono: <MdEdit className="text-4xl max-lg:text-2xl" />,
      titlte: 'Edit Your Service',
      text2: ` 
        Increase your sales by using special features of Enterprise Membership
      `,
      bouton: (
        <div className="mt-6">
          <div className="m-auto part3">
            <BouTon
              bouty={
                'bg-[#343A40] py-3 max-md:py-1 d px-10 flex items-center justify-center mb-6 max-lg:mb-0 rounded-md'
              }
              contenu={'Edit Service'}
            />
          </div>
        </div>
      ),
      perso: 'perso mx-8 ',
      bgColor: 'shad23 w-1/6',
      fond: 'h-auto',
    },
  ];

  // Comportement //////
  const Table2 = ({ icono, text2, titlte, bouton, bgColor, fond, perso }) => {
    return (
      <div className="mx-8 shad flex mb-6">
        <div className={`${bgColor}`}>
          <button className={`${fond}`}>{icono}</button>
        </div>
        <div className={`${perso} w-4/5 h-32 max-lg:h-auto max-lg:mx-5 max-lg:my-4 flex items-center max-lg:items-start max-lg:flex-col justify-between gap-3`}>
          <div>
            <h3 className="font-bold mb-2">{titlte}</h3>
            <p className="text-sm fonto max-lg:mb-3">{text2}</p>
          </div>
          <div className='max-lg:mx-auto'>{bouton}</div>
        </div>

        {/* <div className='max-md:mb-5 '> */}
      </div>
    );
  };

  const MonMap = () => {
    return (
      <div>
        {Table.map((elemo, index) => (
          <Table2 {...elemo} key={index} />
        ))}
      </div>
    );
  };

  return <MonMap />;
}
