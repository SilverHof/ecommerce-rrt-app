import { TabContentsProps } from './TabContents.props'
import './TabContents.scss'

export const TabContents = ({ children }: TabContentsProps) => {

   // use TabContents
   // {active === 1 && <TabContent text={'its tab 1'} />}

   return (
      <div className="tab-contents">
         {children}
      </div>
   )
}
