import React from "react";
import productData from "../constants/product-data.json"
import { AiFillStar } from "react-icons/ai";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const renderStarIcons = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<AiFillStar key={i} className="rating-star" />);
    }
    return stars;
  };

export default function DisplayProducts({addToCart}) { 
    return (

        <div className='my-10 mx-12 list-none grid grid-cols-auto-fit-minmax gap-5'>
            {productData.map((product, index) => (
                    <div className='flex flex-col self-center font-roboto rounded-[5px] list-none pt-8 pb-4 px-10 text-center border-[1px] border-silver' key={index}>
                        <Link to={`/products/${product.title}`}>
                            <img className='h-[150px] w-[250px]' src={product.img} alt={product.title} />
                            <h2 className='text-xl font-playFairDisplay my-3 text-darkGray font-bold'>{product.title}</h2>
                        </Link>
                        
                        <div className='flex justify-center items-center gap-3'>
                            <p className='text-gold inline-flex'>{renderStarIcons(product.rating)}</p>
                            <p className="product-review">{product.reviews}</p>
                        </div>
                        <div className='flex justify-center gap-3'>
                            <p className='line-through text-gray-500'>{product.prevPrice}</p>  
                            <p>{product.newPrice}</p>
                        </div>
                        <div className='flex mt-4 justify-center hover:opacity-80 transition-opacity duration-200 ease-in cursor-pointer' onClick={() => addToCart(product)}>
                            <p className='ml-5 text-[18px] text-darkGray font-bold'>Add to Cart</p>
                            <RiShoppingBag4Fill className='text-2xl ml-2 mt-[-1px] cursor-pointer w-fit text-darkGray'/>
                        </div>
                    </div>
                ))}
                <ToastContainer limit={3} className='mt-[-8px]'/>
        </div>
    );
};
