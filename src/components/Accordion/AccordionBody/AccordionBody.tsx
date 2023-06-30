import { AccordionBodyProps } from './AccordionBody.props'
import './AccordionBody.scss'


export const AccordionBody = ({ children, isText, text }: AccordionBodyProps) => {
   return (
      <div className="accordion-body">
         <p className="accordion-body__text">
            { isText && text}
         </p>
         { children }
      </div>
   )
}
