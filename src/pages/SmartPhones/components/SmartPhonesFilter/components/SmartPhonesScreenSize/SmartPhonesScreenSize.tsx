import React from 'react'
import './SmartPhonesScreenSize.scss'


export const SmartPhonesScreenSize = ({ filterScreenSize, setFilterScreenSize}) => {

   const handleClick = (event) => {
      
      if (!filterScreenSize.includes(event.target.value)) {
         setFilterScreenSize([...filterScreenSize, event.target.value]);
      } else if (!event.target.checked && filterScreenSize.includes(event.target.value)) {
         setFilterScreenSize(previousState => previousState.filter(state => state != event.target.value))
      }

   }

   return (
      <div className="smart-phones-screen-size">
         <div className="smart-phones-screen-size__title">
            Screen size
         </div>
         <div className="smart-phones-screen-size__decor"></div>
         <div className="smart-phones-screen-size__buttons">
            <label 
               htmlFor="" 
               className="smart-phones-screen-size__label" 
               onClick={handleClick}>
               <input 
                  className="smart-phones-screen-size__checkbox" 
                  type="checkbox"
                  value={`3.5" - 4.9"`} 
               />
               3.5" - 4.9"
            </label>
            <label 
               htmlFor="" 
               className="smart-phones-screen-size__label" 
               onClick={handleClick}>
               <input 
                  className="smart-phones-screen-size__checkbox" 
                  type="checkbox"
                  value={`5.0" - 5.4"`} 
               />
               5.0" - 5.4"
            </label>
            <label 
               htmlFor="" 
               className="smart-phones-screen-size__label" 
               onClick={handleClick}>
               <input 
                  className="smart-phones-screen-size__checkbox" 
                  type="checkbox"
                  value={`5.5" - 5.9"`} 
               />
               5.5" - 5.9"
            </label>
            <label 
               htmlFor="" 
               className="smart-phones-screen-size__label" 
               onClick={handleClick}>
               <input 
                  className="smart-phones-screen-size__checkbox" 
                  type="checkbox"
                  value={`6.0" - 6.4"`} 
               />
               6.0" - 6.4"
            </label>
            <label 
               htmlFor="" 
               className="smart-phones-screen-size__label" 
               onClick={handleClick}>
               <input 
                  className="smart-phones-screen-size__checkbox" 
                  type="checkbox"
                  value={`more 6.5"`} 
               />
               more 6.5"
            </label>
         </div>
      </div>
   )
}
