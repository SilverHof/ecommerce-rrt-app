import React, { useEffect, useState } from 'react'
import './User.scss'
import { UilBox } from '@iconscout/react-unicons'
import { UilHeart } from '@iconscout/react-unicons'
import { UilShoppingBasket } from '@iconscout/react-unicons'
import { UserDropdownMenu } from './UserDropdownMenu/UserDropdownMenu'


export const User = () => {

   const [open, setOpen] = useState<boolean>(false);

   useEffect(() => {

      const handler = (event: MouseEvent) => {
         if (event.target) {
            setOpen(false);
         }
      }

      document.addEventListener("mousedown", handler)
   })

   return (
      <div className="user">
         <div className="user__buttons">
            <button className="user__button">
               <UilBox className="user__button-icon" />
               <span className="user__button-text">
                  Orders
               </span>
            </button>
            <button className="user__button">
               <UilHeart className="user__button-icon" />
               <span className="user__button-text">
                  Favorites
               </span>
            </button>
            <button className="user__button">
               <UilShoppingBasket className="user__button-icon" />
               <span className="user__button-text">
                  Busket
               </span>
            </button>
         </div>
         <button 
            className="user__profile-button"
            onClick={() => setOpen(true)}   
         >
            {open && <UserDropdownMenu />}
         </button>
      </div>
   )
}
