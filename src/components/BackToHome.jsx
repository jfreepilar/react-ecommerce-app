import React from 'react';
import {Link} from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";


export default function BackToHome() {
  return (
    <>
        <Link to="/">
            <div className='text-[40px] mt-6 ml-3 text-darkGray cursor-pointer absolute'><FaArrowLeft /></div>
        </Link>
    </>

  )
}
