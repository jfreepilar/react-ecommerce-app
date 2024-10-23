import React from 'react'
import "./addcart.css"
import BackToHome from '../BackToHome/BackToHome';

export default function Addcart({cart, setCart}) { 
  const addQuantity = (productTitle) => {
    setCart(cart.map((item) => 
      item.title === productTitle ? { ...item, quantity: item.quantity + 1} : item
    )
  );
};

  const subtractQuantity = (productTitle) => {
    setCart(cart.map((item) => 
      item.title === productTitle ? { ...item, quantity: Math.max(item.quantity - 1, 0)} : item
    )
  );
};

const removeItem = (productTitle) => {
  setCart(cart.filter((item) => item.title !== productTitle));
};

const calculateTotalPrice = () => {
  if (cart.length !==0) {
    const total = cart.reduce((acc, item) => {
      const itemPrice = parseFloat(item.newPrice.replace('$', ''));
      return acc + itemPrice * item.quantity;
    }, 0);
    return `Total Price: $${total.toFixed(2)}`;
  } else {
    return "Please Add Items to the cart"
  }
};

  return (
    <>
      <BackToHome/>
      <div className="cart-main-container">
        <div className="cart-container">
            {cart.map((product, index) => (
              <div className="cart-card" key={index}>
                <div className="img-container">
                  <img className="cart-img" src={product.img} alt={product.title}/>
                  <p>{product.title}</p>
                  <p>{product.newPrice}</p>
                </div>
                <div className="quantity-container">
                  <div className="add-quantity" onClick={() => addQuantity(product.title)}>+</div>
                  <p className="quantity">{product.quantity}</p>
                  <div className="subtract-quantity" onClick={() => subtractQuantity(product.title) }>-</div>
                  <div className="remove" onClick={() => removeItem(product.title)}>Remove</div>
                </div>
              </div>
            ))}
            <div>
              <div className="total-price">{calculateTotalPrice()}</div>
              <div className="checkout">Check Out</div>
            </div>
        </div>
      </div>
  </>
 )
}
