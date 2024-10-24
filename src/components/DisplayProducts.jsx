import React from "react";
import productData from "../constants/product-data.json"
import { AiFillStar } from "react-icons/ai";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';


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
                    <div className='flex flex-col self-center rounded-[5px] list-none pt-8 pb-4 px-10 text-center border-[1px] border-silver' key={index}>
                        <Link to={`/products/${product.title}`}>
                            <img className='h-[150px] w-[250px]' src={product.img} alt={product.title} />
                            <h2 className='text-xl my-3 text-black'>{product.title}</h2>
                        </Link>
                        
                        <div className='flex justify-center gap-3'>
                            <p className='text-gold inline-flex'>{renderStarIcons(product.rating)}</p>
                            <p className="product-review">{product.reviews}</p>
                        </div>
                        <div className='flex justify-center gap-3'>
                            <p className='line-through text-gray-500'>{product.prevPrice}</p>  
                            <p>{product.newPrice}</p>
                        </div>
                        <div className='flex mt-4 justify-center'>
                            <p className='ml-8 text-[18px] text-darkGray'>Add to Cart</p>
                            <RiShoppingBag4Fill className='text-3xl ml-4 mt-[-3px] cursor-pointer w-fit text-darkGray hover:opacity-80 transition-opacity duration-200 ease-in' onClick={() => addToCart(product)}/>
                        </div>
                    </div>
                ))}
        </div>
    );
};
