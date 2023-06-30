import React from 'react'
import { SmartPhonesProduct } from './components/SmartPhonesProduct/SmartPhonesProduct'
import './SmartPhonesProducts.scss'


export const SmartPhonesProducts = ({ products, filterBrand, filterMinPrice, filterMaxPrice, filterMemorySize, filterScreenSize }) => {

   return (
      <div className="smart-phones-products">
         {  ((filterBrand.length === 0) 
            &&
            (filterMinPrice === 0 && filterMaxPrice === 0)
            && 
            (filterMemorySize.length === 0) 
            && 
            (filterScreenSize.length === 0)) 
            ?
            products.map((product: any) => (
               <SmartPhonesProduct
               key={product.id}
               to={`/${product.id}`}
               
               name={product.name}
               memorySize={product.memorySize}
               screenSize={product.screenSize}
               price={product.price}
               imageSrc={product.imageSrc}
               processor={product.processor}
               battery={product.battery}
               screenResolution={product.screenResolution}
               protection={product.protection}
               count_of_comments={product.comments.length}
            />
            ))
            :
            products
            .filter((product: any) => 
               (filterBrand.includes(product.brand)) || (filterBrand.length === 0))
            .filter((product: any) => 
               (product.price >= filterMinPrice && product.price <= filterMaxPrice)
               ||
               (product.price >= filterMinPrice && filterMaxPrice === 0)
               ||
               (product.price <= filterMinPrice && filterMinPrice === 0)
               )
            .filter((product: any) => 
               (filterMemorySize.includes(product.memorySizeRange)) || (filterMemorySize.length === 0))
            .filter((product: any) => 
               (filterScreenSize.includes(product.screenSizeRange)) || (filterScreenSize.length === 0))
            .map((product: any) => (
               <SmartPhonesProduct
                  key={product.id}
                  to={`/${product.id}`}
                  
                  name={product.name}
                  memorySize={product.memorySize}
                  screenSize={product.screenSize}
                  price={product.price}
                  imageSrc={product.imageSrc}
                  processor={product.processor}
                  battery={product.battery}
                  screenResolution={product.screenResolution}
                  protection={product.protection}
                  count_of_comments={product.comments.length}
               />
            ))
         }
      </div>
   )
}
