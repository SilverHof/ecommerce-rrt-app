import React from 'react'
import { Link } from 'react-router-dom'
import './UserDropdownMenu.scss'
import { UilBox } from '@iconscout/react-unicons'
import { UilCornerUpLeft } from '@iconscout/react-unicons'
import { UilHeart } from '@iconscout/react-unicons'
import { UilComparison } from '@iconscout/react-unicons'
import { UilQuestionCircle } from '@iconscout/react-unicons'
import { UilCommentAltLines } from '@iconscout/react-unicons'
import { UilCog } from '@iconscout/react-unicons'
import { UilSignout } from '@iconscout/react-unicons'


export const UserDropdownMenu = () => {
   return (
      <div 
         className="user-dropdown-menu"
      >
         <div className="user-dropdown-menu__profile">
            <div className="user-dropdown-menu__profile-icon">

            </div>
            <div className="user-dropdown-menu__profile-info">
               <span className="user-dropdown-menu__profile-name">
                  SilverHof
               </span>
               <span className="user-dropdown-menu__profile-email">
                  silverhof@gmail.com
               </span>
            </div>
         </div>
         <ul className="user-dropdown-menu__items">
            <Link 
               to={'/'} 
               className="user-dropdown-menu__item"
            >
               <UilBox className="user-dropdown-menu__item-icon" />
               <span className="user-dropdown-menu__item-text">
                  Orders
               </span>
            </Link>
            <Link 
               to={'/'} 
               className="user-dropdown-menu__item"
            >
               <UilCornerUpLeft className="user-dropdown-menu__item-icon" />
               <span className="user-dropdown-menu__item-text">
                  Returns
               </span>
            </Link>
            <Link 
               to={'/'} 
               className="user-dropdown-menu__item"
            >
               <UilHeart className="user-dropdown-menu__item-icon" />
               <span className="user-dropdown-menu__item-text">
                  Favorites
               </span>
            </Link>
            <Link 
               to={'/'} 
               className="user-dropdown-menu__item"
            >
               <UilComparison className="user-dropdown-menu__item-icon" />
               <span className="user-dropdown-menu__item-text">
               Comparison
               </span>
            </Link>
            <Link 
               to={'/'} 
               className="user-dropdown-menu__item"
            >
               <UilQuestionCircle className="user-dropdown-menu__item-icon" />
               <span className="user-dropdown-menu__item-text">
                  FAQ
               </span>
            </Link>
            <Link 
               to={'/'} 
               className="user-dropdown-menu__item"
            >
               <UilCommentAltLines className="user-dropdown-menu__item-icon" />
               <span className="user-dropdown-menu__item-text">
                  Support chat
               </span>
            </Link>
            <Link 
               to={'/'} 
               className="user-dropdown-menu__item"
            >
               <UilCog className="user-dropdown-menu__item-icon" />
               <span className="user-dropdown-menu__item-text">
                  Settings
               </span>
            </Link>
            <button 
               className="user-dropdown-menu__logout"
            >
               <UilSignout className="user-dropdown-menu__logout-icon" />
               <span className="user-dropdown-menu__logout-text">
                  Log out
               </span>
            </button>
         </ul>
      </div>
   )
}
