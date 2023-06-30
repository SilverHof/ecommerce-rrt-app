import React from 'react'
import './ProductActions.scss'
import { UilShoppingCart } from '@iconscout/react-unicons'
import { UilChartBar } from '@iconscout/react-unicons'
import { UilShareAlt } from '@iconscout/react-unicons'

import { UilTelegramAlt } from '@iconscout/react-unicons'
import { UilInstagramAlt } from '@iconscout/react-unicons'
import { UilTwitter } from '@iconscout/react-unicons'


export const ProductActions = ({ price }) => {
   return (
      <div className="product-actions">
         <div className="product-actions__price">
            ${price}
            <button className="product-actions__add-button">
               <UilShoppingCart className="product-actions__add-button-icon" />
               Add to busket
            </button>
         </div>
         <button className="product-actions__cashback">
            Get 10% cashback on your purchase
         </button>
         <button className="product-actions__compare-button">
            <UilChartBar className="product-actions__compare-button-icon" />
            Compare products
         </button>
         <div className="product-actions__share-box">
            <div className="product-actions__share-box-info">
               <UilShareAlt className="product-actions__share-box-icon" />
               Share
            </div>
            <div className="product-actions__share-box-links">
               <a href="/" className="product-actions__telegram">
                  <UilTelegramAlt className="product-actions__telegram-icon" />
               </a>
               <a href="/" className="product-actions__instagram">
                  <UilInstagramAlt className="product-actions__instagram-icon" />
               </a>
               <a href="/" className="product-actions__twitter">
                  <UilTwitter className="product-actions__twitter-icon" />
               </a>
            </div>
         </div>
      </div>
   )
}
