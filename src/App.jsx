import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import DisplayProducts from './components/DisplayProducts.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import Addcart from './components/Addcart.jsx'
import Footer from './components/Footer.jsx'



export default function App() {
  const [cart, setCart] = useState([]);

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
  };


  return (
<>
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
