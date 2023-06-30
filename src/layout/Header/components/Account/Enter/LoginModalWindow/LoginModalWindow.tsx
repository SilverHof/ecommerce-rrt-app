import React from 'react'
import './LoginModalWindow.scss'
import { UilMultiply } from '@iconscout/react-unicons'


export const LoginModalWindow = ({ loginOpen, setLoginOpen }) => {
   return (
      <div className={loginOpen ? `login-modal-window login-modal-window_open` : `login-modal-window login-modal-window_close`}>
         <div className="login-modal-window__body">
            <button 
               className="login-modal-window__close-button"
               onClick={() => setLoginOpen(!loginOpen)}
            > 
               <UilMultiply className="login-modal-window__close-button-icon" />
            </button>
            <h2 className="login-modal-window__title">
               Enter your account 
            </h2>
            <form action="" className="login-modal-window__form">
               <label className="login-modal-window__label" >
                  Email
                  <input type="email" className="login-modal-window__email" />
               </label>
               <label className="login-modal-window__label">
                  Password
                  <input type="password" className="login-modal-window__password" />
               </label>
               <div className="login-modal-window__remember-me">
                  <input type="checkbox" className="login-modal-window__remember-me-checkbox" />
                  <span className="login-modal-window__remember-me-text">
                     Remember me
                  </span>
               </div>
               <button className="login-modal-window__login-button">
                  Login
               </button>
            </form>
         </div>
      </div>
   )
}
