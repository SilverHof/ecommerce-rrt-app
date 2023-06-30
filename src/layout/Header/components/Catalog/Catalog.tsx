import React, { useState } from 'react'
import './Catalog.scss'
import { UilBars } from '@iconscout/react-unicons'
import { UilMultiply } from '@iconscout/react-unicons'
import { CatalogDropdownMenu } from './CatalogDropdownMenu/CatalogDropdownMenu'


export const Catalog = () => {

   const [open, setOpen] = useState<boolean>(false);
   const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

   const handleClick = () => {
      setOpen(!open);
      setDropdownOpen(!dropdownOpen);
   }

   return (
      <>
         <button className="catalog" onClick={handleClick} >
            {
               open 
               ? 
               (
                  <>
                     <UilMultiply className="catalog__icon" />
                     <span className="catalog__text">
                        Catalog
                     </span>
                  </>
               )
               :
               (
                  <>
                     <UilBars className="catalog__icon" />
                     <span className="catalog__text">
                        Catalog
                     </span>
                  </>
               )
            }
            {
               dropdownOpen && <CatalogDropdownMenu />
            }
         </button>
      </>
   )
}
