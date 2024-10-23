import React from 'react';
import {Link} from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import './back-to-home.css';


export default function BackToHome() {
  return (
    <>
        <Link to="/">
            <div className="back-arrow"><FaArrowLeft /></div>
        </Link>
    </>

  )
}
