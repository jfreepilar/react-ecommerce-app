import {useState, useEffect} from 'react'
import { RiShoppingBag4Fill } from "react-icons/ri";
import {Link} from 'react-router-dom'
import './navbar.css'


export default function Navbar() {
    const [isFixed, setIsFixed] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 690) {
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
        <div className={isFixed ? 'navbar fixed' : 'navbar'}>
            <img src="src/assets/logo.png" className="logo"/>
            <Link to="addcart">
              <div className='addcart'><RiShoppingBag4Fill/></div>
            </Link>
        </div>

    </>
  )
}
