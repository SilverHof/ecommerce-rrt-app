import { Link } from 'react-router-dom'
import { DropdownItemProps } from './DropdownItem.props'
import './DropdownItem.scss'


export const DropdownItem = ({ children, to, classname, isIcon, icon, text }: DropdownItemProps) => {
   return (
      <Link to={to}>
         {
            isIcon
            &&
            <>
               <div className={`"dropdown-item__icon-box" ${classname}`}>
                  {icon}
               </div>
            </>   
         }
         <span className="dropdown-item__text">
            {text}
         </span>
         {children}
      </Link>
   )
}
