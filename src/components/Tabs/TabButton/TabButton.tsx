import { TabButtonProps } from './TabButton.props'
import './TabButton.scss'


export const TabButton = ({ text, index, active, setActive }: TabButtonProps) => {

   return (
      <button className={active === index ? "tab-button_active" : "tab-button"} onClick={() => setActive(index)}>
         { text }
      </button>
   )
}
