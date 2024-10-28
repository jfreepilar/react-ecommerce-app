import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import DisplayProducts from './components/DisplayProducts.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import Addcart from './components/Addcart.jsx'
import Footer from './components/Footer.jsx'
import { toast, Slide } from 'react-toastify'



export default function App() {
  const [cart, setCart] = useState([]);

  const notify = () => {
    toast.info('Added to Cart', {
        icon: (<span className="bg-orange-500 text-white text-[16px] rounded-full py-[2px] px-[11px] ml-[35px] font-bold">i</span>),
        bodyClassName: "text-[16px] text-center",
        progressClassName: "bg-white",
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
        });
};


  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.title === product.title);
      if (existingProduct) {
        return prevCart.map(item =>
          item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    notify();
  };




  return (
<>
  <ScrollToTop />
  <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<DisplayProducts addToCart={addToCart} />} />
      <Route path="products/:productTitle" element={<ProductDetails addToCart={addToCart} />} />
      <Route path="addcart" element={<Addcart cart={cart} setCart={setCart} />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Route>
  </Routes>
  <Footer />
</>
  );
}
