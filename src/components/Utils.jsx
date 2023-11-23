
import React from 'react'
import { HiOutlineDocument, HiOutlineViewGrid } from "react-icons/hi";
import { AiOutlineBell} from "react-icons/ai";
import { FiMessageSquare, FiUser, FiPieChart, FiSettings } from "react-icons/fi";
import { MdOutlinePayment, MdEdit } from "react-icons/md";
import Menu from './Menu'




const Elements = [
  { icone: <HiOutlineDocument  className="me-6 icono"/>, text: 'Documents' },
  { icone: <MdOutlinePayment className="me-6 icono" />, text: 'Payments' },
  { icone: <FiMessageSquare className="me-6 icono" />, text: 'Messages' },
  { icone: <FiPieChart className="me-6 icono" />, text: 'Report Center' },
]

export default Elements
 

