import React from "react"
import productData from "../display-products/productData.json"
import { AiFillStar } from "react-icons/ai";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { useParams, Link } from "react-router-dom";
import './product-details.css'
import BackToHome from "../back-to-home/BackToHome.jsx";

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
          <div className="detail-container">
            <div key={product.title}>
                <img className="detail-image" src={product.img} alt={product.title} />
                <h2 className="name">{product.title}</h2>
                <div className="star-container">
                    <div className="detail-star">{renderStarIcons(product.rating)}</div>
                    <p className="detail-review">{product.reviews}</p>
                </div>
            <div className="price-container">
                <p className="detail-prev-price">{product.prevPrice}</p>  
                <p className="detail-new-price">{product.newPrice}</p>
            </div>
            <div className="detail-shop-container">
                  <div className="detail-shop" onClick={() => addToCart(product)}><RiShoppingBag4Fill/></div>
            </div>
                </div>
            </div>

            <div className="description-container">
              <p className="description-text">Crafted with a premium synthetic upper and breathable mesh, these sneakers feature a durable rubber outsole with enhanced grip. The EVA foam midsole provides maximum comfort and support, while the lightweight design ensures effortless movement. With a true-to-size fit, these sneakers are perfect for running, training, and casual wear.</p>
            </div>
        </div>
    );
}
