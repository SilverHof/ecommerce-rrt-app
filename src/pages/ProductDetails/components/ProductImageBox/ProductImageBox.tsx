import React, { useState } from 'react'
import './ProductImageBox.scss'


export const ProductImageBox = ({ images }) => {

   const [activeIndex, setActiveIndex] = useState(0);
   
   return (
      <div className="product-image-box">
         <div className="product-image-box__buttons">
         {
            images.map((image: any, index: number) => (
               <button
               key={index} 
               className={activeIndex === index ? `product-image-box__button_active` : `product-image-box__button`}
               onClick={() => setActiveIndex(index)}
            >
               <img 
                  className="product-image-box__button-icon" 
                  src={image.imageSrc} 
                  alt="" 
               />
            </button>
            ))
         }
         </div>
         <div className="product-image-box__main-image-box">
            <img 
               className="product-image-box__main-image" 
               src={images[activeIndex].imageSrc} 
               alt="Product image" 
            />
         </div>
      </div>
   )
}
