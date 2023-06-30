import React from 'react'
import './Info.scss'


export const Info = () => {
   return (
      <div className="info">
         <ul className="info__column">
            <h2 className="info__title">
               Earn with Buyzone
            </h2>
            <li className="info__item">
               Become a supplier
            </li>
            <li className="info__item">
               Open a pickup point
            </li>
            <li className="info__item">
               Become a seller
            </li>
         </ul>
         <ul className="info__column">
            <h2 className="info__title">
               How to make an order
            </h2>
            <li className="info__item">
               Payment
            </li>
            <li className="info__item">
               Delivery
            </li>
            <li className="info__item">
               Return of goods
            </li>
            <li className="info__item">
               Safety
            </li>
         </ul>
         <ul className="info__column">
            <h2 className="info__title">
               Buyzone
            </h2>
            <li className="info__item">
               Jobs
            </li>
            <li className="info__item">
               Requisites
            </li>
            <li className="info__item">
               Company's news
            </li>
         </ul>
      </div>
   )
}
