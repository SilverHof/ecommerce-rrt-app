import React from 'react'
import './SocialMedia.scss'
import { UilTelegramAlt } from '@iconscout/react-unicons'
import { UilInstagramAlt } from '@iconscout/react-unicons'
import { UilTwitter } from '@iconscout/react-unicons'


export const SocialMedia = () => {
   return (
      <ul className="social-media">
         <a href="/" className="social-media__telegram">
            <UilTelegramAlt className="social-media__telegram-icon" />
         </a>
         <a href="/" className="social-media__instagram">
            <UilInstagramAlt className="social-media__instagram-icon" />
         </a>
         <a href="/" className="social-media__twitter">
            <UilTwitter className="social-media__twitter-icon" />
         </a>
      </ul>
   )
}
