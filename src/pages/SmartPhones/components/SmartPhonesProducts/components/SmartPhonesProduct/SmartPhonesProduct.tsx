import React from 'react'
import './SmartPhonesProduct.scss'
import { Link } from 'react-router-dom'

import { UilStar } from '@iconscout/react-unicons'
import { UilShoppingCart } from '@iconscout/react-unicons'
import { UilExternalLinkAlt } from '@iconscout/react-unicons'
import { UilHeart } from '@iconscout/react-unicons'

import { UilBrain } from '@iconscout/react-unicons'
import { UilExpandAlt } from '@iconscout/react-unicons'
import { UilImageResizeSquare } from '@iconscout/react-unicons'
import { UilBatteryBolt } from '@iconscout/react-unicons'
import { UilProcessor } from '@iconscout/react-unicons'
import { UilShieldCheck } from '@iconscout/react-unicons'


export const SmartPhonesProduct = ({ to, name, memorySize, screenSize, price, imageSrc, processor, battery, screenResolution, protection, count_of_comments }) => {
   
   return (
      <div className="smart-phones-product">
         <div className="smart-phones-product__body">
            <div className="smart-phones-product__image-box">
               <img src={imageSrc} alt="" className="smart-phones-product__image" />
            </div>
            <div className="smart-phones-product__head">
               <div className="smart-phones-product__review">
                  <UilStar className="smart-phones-product__review-star" />
                  <span className="smart-phones-product__review-mark">
                     5.0
                  </span>
                  <span className="smart-phones-product__review-count">
                     ({count_of_comments})
                  </span>
               </div>
               <h2 className="smart-phones-product__price">
                  ${price}
               </h2>
            </div>
            <h2 className="smart-phones-product__name">
               {name}
            </h2>
         </div>

         <div className="smart-phones-product__backside backside">
            <div className="backside__body">
               <ul className="backside__items">
                  <li className="backside__item">
                     <UilBrain className="backside__item-icon" />
                     {memorySize === 1024 ? ' 1 TB' : (memorySize + ' GB')}
                  </li>
                  <li className="backside__item">
                     <UilExpandAlt className="backside__item-icon" /> {screenSize} inches  
                  </li>
                  <li className="backside__item">
                     <UilImageResizeSquare className="backside__item-icon" /> {screenResolution}  
                  </li>
                  <li className="backside__item">
                     <UilBatteryBolt className="backside__item-icon" /> {battery}  
                  </li>
                  <li className="backside__item">
                     <UilProcessor className="backside__item-icon" /> 
                     {processor} 
                  </li>
                  <li className="backside__item">
                     <UilShieldCheck className="backside__item-icon" /> 
                     {protection} 
                  </li> 
               </ul>
               <div className="backside__buttons">
                  <button className="backside__buy-button">
                     <UilShoppingCart className="backside__buy-button-icon" />
                     <span className="backside__buy-button-text">
                        Buy
                     </span>
                  </button>
                  <button className="backside__add-button">
                     <UilHeart className="backside__add-button-icon" />
                  </button>
                  <Link to={to} className="backside__link-button">
                     <UilExternalLinkAlt className="backside__link-button-icon" />
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}
