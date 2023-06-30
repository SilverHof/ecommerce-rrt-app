import { UilMultiply } from '@iconscout/react-unicons'
import { ModalWindowProps } from './ModalWindow.props'
import './ModalWindow.scss'


export const ModalWindow = ({ children, open, setOpen }: ModalWindowProps) => {
   return (
      <div className={open ? `modal-window modal-window_open` : `modal-window modal-window_close`}>
         <div className="modal-window__body">
            <button 
               className="modal-window__close-button"
               onClick={() => setOpen(!open)}
            >
               <UilMultiply className="modal-window__close-button-icon" />
            </button>
            {children}
         </div>
      </div>
   )
}
