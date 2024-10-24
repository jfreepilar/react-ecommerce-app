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
    <>
        <div className={`${isFixed ? 'bg-orange-400 text-white mx-auto fixed z-[100] top-0 left-0 transition-all duration-500 ease-in' : 'absolute'} 
                        h-[75px] w-full flex justify-between g-[50px] text-white`}>
            <img src={stompLogo} className='mt-[-60px] ml-5 h-[200px] w-[200px]'/>
            <Link to="addcart">
              <div className='text-white text-5xl mt-3 mr-5'rt><RiShoppingBag4Fill/></div>
            </Link>
        </div>

    </>
  )
}
