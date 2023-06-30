import React, { useState } from 'react'
import './SmartPhonesBrand.scss'


export const SmartPhonesBrand = ({ filterBrand, setFilterBrand }) => {

   const handleClick = (event) => {
      
      if (!filterBrand.includes(event.target.value)) {
         setFilterBrand([...filterBrand, event.target.value]);
      } else if (!event.target.checked && filterBrand.includes(event.target.value)) {
         setFilterBrand(previousState => previousState.filter(state => state != event.target.value))
      }

   }

   return (
      <div className="smart-phones-brand">
         <div className="smart-phones-brand__title">
            Brand
         </div>
         <div className="smart-phones-brand__decor"></div>
         <div className="smart-phones-brand__buttons">
            <label 
               htmlFor="" 
               className="smart-phones-brand__label" 
               onClick={handleClick}>
               <input 
                  type="checkbox"
                  value="apple" className="smart-phones-brand__checkbox" 
               />
               Apple
            </label>
            <label 
               htmlFor="" 
               className="smart-phones-brand__label" 
               onClick={handleClick}>
               <input 
                  type="checkbox"
                  value="samsung" className="smart-phones-brand__checkbox" 
               />
               Samsung
            </label>
            <label 
               htmlFor="" 
               className="smart-phones-brand__label" 
               onClick={handleClick}>
               <input 
                  type="checkbox"
                  value="huawei" className="smart-phones-brand__checkbox" 
               />
               Huawei
            </label>
            <label 
               htmlFor="" 
               className="smart-phones-brand__label" 
               onClick={handleClick}>
               <input 
                  type="checkbox"
                  value="xiaomi" className="smart-phones-brand__checkbox" 
               />
               Xiaomi
            </label>
         </div>
      </div>
   )
}
