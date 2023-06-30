import { ChangeEvent, useState } from 'react'
import './SmartPhonesPrice.scss'


export const SmartPhonesPrice = ({ filterMinPrice, setFilterMinPrice, filterMaxPrice, setFilterMaxPrice }) => {

   const [minValue, setMinValue] = useState<number>(0);
   const [maxValue, setMaxValue] = useState<number>(0);

   const handleMinValueChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (minValue === undefined) {
         setMinValue(0)
      } else {
         setMinValue(parseInt(event.target.value));
      }
   }

   const handleMaxValueChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (maxValue === undefined) {
         setMaxValue(0);
      } else {
         setMaxValue(parseInt(event.target.value));
      }
   }

   const handleEnterPress = (event) => {
      if (event.key === 'Enter') {
         console.log('adsfadf');
         
         if (minValue > maxValue) {
            setFilterMinPrice(maxValue);
            setFilterMaxPrice(maxValue);
            setMaxValue(minValue);
         } else if (minValue < maxValue) {
            setFilterMinPrice(minValue);
            setFilterMaxPrice(maxValue);
         }
      }     
   }

   return (
      <div className="smart-phones-price">
         <div className="smart-phones-price__title">
            Price
         </div>
         <div className="smart-phones-price__decor"></div>
         <div className="smart-phones-price__range-box">
            <div className="smart-phones-price__head">
               <span className="smart-phones-price__head-from">
                  From
               </span>
               <span className="smart-phones-price__head-to">
                  To
               </span>
            </div>
            <div className="smart-phones-price__inputs">
               <input 
                  className="smart-phones-price__min-input" 
                  type="text"
                  value={minValue}
                  onChange={handleMinValueChange}
                  onKeyPress={handleEnterPress} 
               />
               <div className="smart-phones-price__range-decor"></div>
               <input 
                  className="smart-phones-price__max-input" 
                  type="text"
                  value={maxValue}
                  onChange={handleMaxValueChange}
                  onKeyPress={handleEnterPress} 
               />
            </div>
         </div>
         
      </div>
   )
}
