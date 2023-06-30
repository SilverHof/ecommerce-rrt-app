import { TabButtonsProps } from './TabButtons.props'
import './TabButtons.scss'


export const TabButtons = ({ children }: TabButtonsProps) => {
   return (
      <div className="tab-buttons">
         {children}
      </div>
   )
}
