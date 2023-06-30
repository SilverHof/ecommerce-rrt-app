import { DropdownMenuProps } from './DropdownMenu.props'
import './DropdownMenu.scss'


export const DropdownMenu = ({ children }: DropdownMenuProps) => {
   return (
      <div className="dropdown-menu">
         {children}
      </div>
   )
}
