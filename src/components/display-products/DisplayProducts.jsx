import React from "react";
import productData from "./productData.json"
import { AiFillStar } from "react-icons/ai";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import "./display-products.css"


const renderStarIcons = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<AiFillStar key={i} className="rating-star" />);
    }
    return stars;
  };

export default function DisplayProducts({addToCart}) { 
    return (

        <div className="main-container">
        {productData.map((product, index) => (
            <div className="product-container" key={index}>
            <Link to={`/products/${product.title}`}>
                <img className="product-image" src={product.img} alt={product.title} />
                <h2 className="product-name">{product.title}</h2>
            </Link>
            <div className="star-container">
                <div className="star">{renderStarIcons(product.rating)}</div>
                <p className="product-review">{product.reviews}</p>
            </div>
            <div className="price-container">
                <p className="prev-price">{product.prevPrice}</p>  
                <p className="new-price">{product.newPrice}</p>
            </div>
            <div className="shop" onClick={() => addToCart(product)}><RiShoppingBag4Fill/></div>
            </div>
            ))}
        </div>
    );
};
