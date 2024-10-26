import {useState, useEffect} from 'react'
import { RiShoppingBag4Fill } from "react-icons/ri";
import {Link} from 'react-router-dom'
import stompLogo from '/assets/logo.png'


export default function Navbar() {
    const [isFixed, setIsFixed] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 1) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);


  return (
        <div className={`${isFixed ? 'bg-orange-400 text-white fixed z-[100] top-0 left-0 transition-all duration-500 ease-in' : 'absolute'} 
                        h-[85px] w-full flex justify-between text-white px-7`}>
            <img src={stompLogo} className='mt-[-60px] ml h-[200px] w-[200px]'/>
            <Link to="addcart">
              <div className='text-white text-5xl mt-3 m-4'><RiShoppingBag4Fill/></div>
            </Link>
        </div>
  )
}
