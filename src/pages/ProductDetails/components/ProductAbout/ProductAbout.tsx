import React from 'react'
import './ProductAbout.scss'


export const ProductAbout = ({ information, characteristics }) => {
   return (
      <div className="product-about">
         <div className="product-about__description">
            <h2 className="product-about__description-title">
               {information.name}
            </h2>
            <p className="product-about__description-text">
               {information.description}
            </p>
         </div>
         <div className="product-about__info">
            <h2 className="product-about__info-title">
               Characteristics
            </h2>
            <div className="product-about__info-columns">
               <ul className="product-about__parameters-column">
                  {characteristics.map((characteristic: any, index: number) => (
                     <li className="product-about__parameter" key={index}>
                        <span className="product-about__parameter-text">
                           {characteristic.parameter}
                        </span>
                        <div className="product-about__parameter-decor"></div>
                     </li>
                  ))}
               </ul>
               <ul className="product-about__values-column">
                  {characteristics.map((characteristic: any, index: number) => (
                     <li className="product-about__value" key={index}>
                        {characteristic.value}
                     </li>
                  ))}
               </ul>
         </div>
         </div>
      </div>
   )
}
