import React from 'react'
import { Link } from 'react-router-dom'
import './CatalogDropdownMenu.scss'
import { UilArrowCircleRight } from '@iconscout/react-unicons'
import { UilDesktop } from '@iconscout/react-unicons'
import { UilMobileAndroidAlt } from '@iconscout/react-unicons'
import { UilUserMd } from '@iconscout/react-unicons'
import { UilCar } from '@iconscout/react-unicons'
import { UilEstate } from '@iconscout/react-unicons'
import { UilPlus } from '@iconscout/react-unicons'
import { UilBasketball } from '@iconscout/react-unicons'
import { UilCrockery } from '@iconscout/react-unicons'
import { UilBooks } from '@iconscout/react-unicons'
import { UilBedDouble } from '@iconscout/react-unicons'


export const CatalogDropdownMenu = () => {
   return (
      <ul className="catalog-dropdown-menu">
         <Link to={'/smart-phones'} className="catalog-dropdown-menu__item">
            <UilMobileAndroidAlt className="catalog-dropdown-menu__item-icon" />
            <span className="catalog-dropdown-menu__item-text">
               Smart phones
            </span>
            <UilArrowCircleRight className="catalog-dropdown-menu__item-arrow" />
         </Link>
         <Link to={'/'} className="catalog-dropdown-menu__item">
            <UilDesktop className="catalog-dropdown-menu__item-icon" />
            <div className="catalog-dropdown-menu__item-text">
               Computers & Laptops
            </div>
            <UilArrowCircleRight className="catalog-dropdown-menu__item-arrow" />
         </Link>
         <Link to={'/'} className="catalog-dropdown-menu__item">
            <UilUserMd className="catalog-dropdown-menu__item-icon" />
            <span className="catalog-dropdown-menu__item-text">
               Clothes & Shoes
            </span>
            <UilArrowCircleRight className="catalog-dropdown-menu__item-arrow" />
         </Link>
         <Link to={'/'} className="catalog-dropdown-menu__item">
            <UilCar className="catalog-dropdown-menu__item-icon" />
            <span className="catalog-dropdown-menu__item-text">
               Cars & Accessories
            </span>
            <UilArrowCircleRight className="catalog-dropdown-menu__item-arrow" />
         </Link>
         <Link to={'/'} className="catalog-dropdown-menu__item">
            <UilEstate className="catalog-dropdown-menu__item-icon" />
            <span className="catalog-dropdown-menu__item-text">
               Home
            </span>
            <UilArrowCircleRight className="catalog-dropdown-menu__item-arrow" />
         </Link>
         <Link to={'/'} className="catalog-dropdown-menu__item">
            <UilPlus className="catalog-dropdown-menu__item-icon" />
            <span className="catalog-dropdown-menu__item-text">
               Pharmacy
            </span>
            <UilArrowCircleRight className="catalog-dropdown-menu__item-arrow" />
         </Link>
         <Link to={'/'} className="catalog-dropdown-menu__item">
            <UilBasketball className="catalog-dropdown-menu__item-icon" />
            <span className="catalog-dropdown-menu__item-text">
               Sport
            </span>
            <UilArrowCircleRight className="catalog-dropdown-menu__item-arrow" />
         </Link>
         <Link to={'/'} className="catalog-dropdown-menu__item">
            <UilCrockery className="catalog-dropdown-menu__item-icon" />
            <span className="catalog-dropdown-menu__item-text">
               Food
            </span>
            <UilArrowCircleRight className="catalog-dropdown-menu__item-arrow" />
         </Link>
         <Link to={'/'} className="catalog-dropdown-menu__item">
            <UilBooks className="catalog-dropdown-menu__item-icon" />
            <span className="catalog-dropdown-menu__item-text">
               Books
            </span>
            <UilArrowCircleRight className="catalog-dropdown-menu__item-arrow" />
         </Link>
         <Link to={'/'} className="catalog-dropdown-menu__item">
            <UilBedDouble className="catalog-dropdown-menu__item-icon" />
            <span className="catalog-dropdown-menu__item-text">
               Furniture
            </span>
            <UilArrowCircleRight className="catalog-dropdown-menu__item-arrow" />
         </Link>
      </ul>
   )
}