import React, { useEffect, useState } from 'react'
import { SmartPhonesBrand } from './components/SmartPhonesBrand/SmartPhonesBrand'
import { SmartPhonesMemorySize } from './components/SmartPhonesMemorySize/SmartPhonesMemorySize'
import { SmartPhonesPrice } from './components/SmartPhonesPrice/SmartPhonesPrice'
import { SmartPhonesScreenSize } from './components/SmartPhonesScreenSize/SmartPhonesScreenSize'
import './SmartPhonesFilter.scss'


export const SmartPhonesFilter = ({ filterBrand, setFilterBrand, filterMinPrice, setFilterMinPrice, filterMaxPrice, setFilterMaxPrice, filterMemorySize, setFilterMemorySize, filterScreenSize, setFilterScreenSize }) => {

   const [reset, setReset] = useState<boolean>(false);

   const resetFilter = () => {
      setFilterBrand([]);
      setFilterMinPrice();
      setFilterMaxPrice();
      setFilterMemorySize([]);
      setFilterScreenSize([]);
      setReset(!reset);
   }

   useEffect(() => {

   }, [reset])

   return (
      <div className="smart-phones-filter">
         <div className="smart-phones-filter__head">
            <h2 className="smart-phones-filter__title">
               Filter
            </h2>
            <button className="smart-phones-filter__reset-button" onClick={resetFilter}>
               Reset
            </button>
         </div>
         <div className="smart-phones-filter__category">
            <SmartPhonesBrand 
               filterBrand={filterBrand} 
               setFilterBrand={setFilterBrand} 
            />
            <SmartPhonesPrice 
               filterMinPrice={filterMinPrice}
               setFilterMinPrice={setFilterMinPrice}

               filterMaxPrice={filterMaxPrice}
               setFilterMaxPrice={setFilterMaxPrice}
            />
            <SmartPhonesMemorySize 
               filterMemorySize={filterMemorySize} setFilterMemorySize={setFilterMemorySize} 
            />
            <SmartPhonesScreenSize 
               filterScreenSize={filterScreenSize}
               setFilterScreenSize={setFilterScreenSize}
            />
         </div>
      </div>
   )
}
