import { TabsProps } from './Tabs.props';
import './Tabs.scss'


export const Tabs = ({ children }: TabsProps) => {

   // add to parent component
   // const [active, setActive] = useState<number>(1);

   return (
      <div className="tabs">
         {children}
      </div>
   )
}
