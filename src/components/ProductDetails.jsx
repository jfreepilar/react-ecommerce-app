import React from "react"
import productData from "../constants/product-data.json"
import { AiFillStar } from "react-icons/ai";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { useParams, Link } from "react-router-dom";
// import './product-details.css'
import BackToHome from "./BackToHome.jsx";

const renderStarIcons = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<AiFillStar key={i} className="rating-star" />);
    }
    return stars;
  };



export default function ProductDetails ({addToCart}) {
    const {productTitle} = useParams();

    const product = productData.find(p => p.title === productTitle);

    if (!product) {
      return <div>Product not found</div>;
    }

    return (
        <div>
          <BackToHome/>
          <div className='flex items-center justify-around flex-col font-roboto mt-[-10px] pt-[15px] px-[40px] pb-[10px] '>
            <div key={product.title}>
                  <img className='my-[15px] w-[500px]' src={product.img} alt={product.title} />
                  <h2 className='text-4xl font-playFairDisplay text-center mt-3 mb-4'>{product.title}</h2>
                  <div className='flex justify-evenly items-center g-3 mb-2'>
                      <div className='text-gold text-2xl inline-flex'>{renderStarIcons(product.rating)}</div>
                      <p className='text-[18px]'>{product.reviews}</p>
                  </div>
              <div className='flex justify-center gap-4'>
                  <p className='line-through text-lightGray text-2xl'>{product.prevPrice}</p>  
                  <p className='text-2xl'>{product.newPrice}</p>
              </div>

              <div className='flex mt-4 justify-center hover:opacity-80 transition-opacity duration-200 ease-in cursor-pointer' onClick={() => addToCart(product)}>
                <p className='ml-5 text-[18px] text-darkGray font-bold'>Add to Cart</p>
                <RiShoppingBag4Fill className='text-2xl ml-3 mt-[-1px] w-fit text-darkGray'/>
              </div>
            </div>
          </div>

          <div className='mx-[100px] '>
              <p className="description-text">Crafted with a premium synthetic upper and breathable mesh, these sneakers feature a durable rubber outsole with enhanced grip. The EVA foam midsole provides maximum comfort and support, while the lightweight design ensures effortless movement. With a true-to-size fit, these sneakers are perfect for running, training, and casual wear.</p>
          </div>

        </div>
    );
}
