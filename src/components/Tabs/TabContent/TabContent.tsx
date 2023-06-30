import { TabContentProps } from './TabContent.props'
import './TabContent.scss'


export const TabContent = ({ text }: TabContentProps) => {
   return (
      <div className="tab-content">
         <p className="tab-content__text">
            {text}
         </p>
      </div>
   )
}
