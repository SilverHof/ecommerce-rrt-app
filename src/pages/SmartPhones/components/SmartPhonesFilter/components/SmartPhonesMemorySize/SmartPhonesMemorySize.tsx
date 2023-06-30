import React from 'react'
import './SmartPhonesMemorySize.scss'


export const SmartPhonesMemorySize = ({ filterMemorySize, setFilterMemorySize }) => {

   const handleClick = (event) => {
      
      if (!filterMemorySize.includes(event.target.value)) {
         setFilterMemorySize([...filterMemorySize, event.target.value]);
      } else if (!event.target.checked && filterMemorySize.includes(event.target.value)) {
         setFilterMemorySize(previousState => previousState.filter(state => state != event.target.value))
      }

   }

   return (
      <div className="smart-phones-memory-size">
         <h2 className="smart-phones-memory-size__title">
            Memory size
         </h2>
         <div className="smart-phones-memory-size__decor"></div>
         <div className="smart-phones-memory-size__buttons">
            <label 
               htmlFor="" 
               className="smart-phones-memory-size__label" 
               onClick={handleClick}>
               <input 
                  type="checkbox"
                  value={32} className="smart-phones-memory-size__checkbox" 
               />
               32 Gb
            </label>
            <label 
               htmlFor="" 
               className="smart-phones-memory-size__label" 
               onClick={handleClick}>
               <input 
                  type="checkbox"
                  value={64} className="smart-phones-memory-size__checkbox" 
               />
               64 Gb
            </label>
            <label 
               htmlFor="" 
               className="smart-phones-memory-size__label" 
               onClick={handleClick}>
               <input 
                  type="checkbox"
                  value={128} className="smart-phones-memory-size__checkbox" 
               />
               128 Gb
            </label>
            <label 
               htmlFor="" 
               className="smart-phones-memory-size__label" 
               onClick={handleClick}>
               <input 
                  type="checkbox"
                  value={256} className="smart-phones-memory-size__checkbox" 
               />
               256 Gb
            </label>
            <label 
               htmlFor="" 
               className="smart-phones-memory-size__label" 
               onClick={handleClick}>
               <input 
                  type="checkbox"
                  value={512} className="smart-phones-memory-size__checkbox" 
               />
               512 Gb
            </label>
            <label 
               htmlFor="" 
               className="smart-phones-memory-size__label" 
               onClick={handleClick}>
               <input 
                  type="checkbox"
                  value={1024} className="smart-phones-memory-size__checkbox" 
               />
               1 Tb
            </label>
         </div>
      </div>
   )
}
