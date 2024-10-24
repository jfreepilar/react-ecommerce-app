import React from 'react'
import BackToHome from './BackToHome';

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
      <div className='h-screen w-full bg-lightGray flex justify-center gap'>
        <div className='h-screen w-1/2 bg-white rounded-md flex flex-col items-center overflow-y-auto shadow-customShadow'>
            {cart.map((product, index) => (
              <div className='flex w-full mt-3 ml-10' key={index}>
                <div className='w-[55%] flex items-center justify-evenly gap-2 mt-2'>
                  <img className='h-[100px] w-[120px]' src={product.img} alt={product.title}/>
                  <p className='text-[18px] text-lightGray font-bold'>{product.title}</p>
                  <p className='text-[18px] text-lightGray font-bold'>{product.newPrice}</p>
                </div>

                <div className='flex w-[300px] justify-evenly mt-10' >
                  <div className='h-10 w-10 cursor-pointer bg-lightOrange text-white text-3xl rounded-md text-center font-bold' 
                       onClick={() => addQuantity(product.title)}>
                        +
                  </div>

                  <p className='text-2xl font-bold text-lightGray p-[2px]'>{product.quantity}</p>

                  <div className='h-10 w-10 cursor-pointer bg-lightOrange text-white text-3xl rounded-md text-center font-bold' 
                       onClick={() => subtractQuantity(product.title) }>
                        -
                  </div>

                  <div className='h-10 w-[80px] cursor-pointer bg-lightOrange text-white text-3xl rounded-md text-center text-[15px] font-bold'  
                      onClick={() => removeItem(product.title)}>
                        Remove
                  </div>

                </div>
              </div>
            ))}
            <div>
              <div className='my-[30px] text-[18px] font-bold w-[180px]'>{calculateTotalPrice()}</div>
              <div className='my-5 p-[10px] text-white bg-lightOrange text-[18px] font-bold rounded-md cursor-pointer text-center'>Check Out</div>
            </div>
        </div>
      </div>
  </>
 )
}
