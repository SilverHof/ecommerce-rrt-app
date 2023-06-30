import React from 'react'
import './SearchForm.scss'
import { UilSearch } from '@iconscout/react-unicons'


export const SearchForm = () => {
   return (
      <form 
         action="" 
         className="search-form"
      >
         <input 
            className="search-form__input" 
            type="text"
            placeholder="Find something wonderful" 
            name="text"
            maxLength={40}
         />
         <button className="search-form__button">
            <UilSearch className="search-form__button-icon" />
         </button>
      </form>
   )
}
