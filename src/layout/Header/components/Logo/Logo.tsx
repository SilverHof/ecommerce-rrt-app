import React from 'react'
import './Logo.scss'
import { UilShop } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'


export const Logo = () => {
   return (
      <Link to={'/'} className="logo">
         <UilShop className="logo__icon" />
         <span className="logo__text">
            buyzone
         </span>
      </Link>
   )
}
