import { AccordionHeaderProps } from './AccordionHeader.props'
import './AccordionHeader.scss'
import { useState } from 'react'


export const AccordionHeader = ({ children, isIcon, icon, isText, text, isButtonMoreIcon, buttonMoreIcon, isButtonMoreText, buttonMoreText, isButtonLessIcon, buttonLessIcon, isButtonLessText, buttonLessText }: AccordionHeaderProps) => {

   const [isClicked, setIsClicked] = useState<boolean>(false);

   return (
      <div className="accordion-header">
         { isIcon && icon }

         <span className="accordion-header__text">
            { isText && text}
         </span>

         {
         !isClicked 
         && 
         <button className="accordion-header__button-more" onClick={() => setIsClicked(true)}>
            { isButtonMoreIcon && buttonMoreIcon }
            { isButtonMoreText && buttonMoreText }
         </button>
         }

         {
         isClicked 
         && 
         <button className="accordion-header__button-less" onClick={() => setIsClicked(false)}>
            { isButtonLessIcon && buttonLessIcon }
            { isButtonLessText && buttonLessText }
         </button>
         }
         
         { isClicked && children }
      </div>
   )
}