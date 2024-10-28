import React from 'react'
import stompLogo from '/assets/logo.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io5";

export default function Footer() {
    const resources = ['Become A Member', 'Send Us Feedback', 'Find A Store'];
    const company = ['About Us', 'News', 'Careers'];
    const socials = [< FaFacebookSquare/>,  <FaXTwitter />, <BsInstagram />, <IoLogoYoutube />];


  return (
    <div className='flex justify-center bg-matisse h-[210px] text-white font-roboto'>
        <div className='flex w-[85%] pt-12 justify-evenly'> 
            <img src={stompLogo} className='mt-[-55px] ml-5 h-[150px] w-[150px]'/>
            <div>
                <h3 className='font-bold text-center text-xl'>Resources</h3>
                {resources.map((item, index) => (
                    <p className='text-center hover:cursor-pointer' key={index}>{item}</p>
                ))}
            </div>

            <div>
                <h3 className='font-bold text-center text-xl'>Company</h3>
                {company.map((item, index) => (
                    <p className='text-center hover:cursor-pointer' key={index}>{item}</p>
                ))}
            </div>

            <div className='flex w-[200px] pt-1 justify-evenly'>
                {socials.map((item, index) => (
                        <p className='text-3xl hover:cursor-pointer' key={index}>{item}</p>
                    ))}
            </div>


        </div>
    </div>
  )
}