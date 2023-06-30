import React from 'react'
import './SignupModalWindow.scss'
import { UilMultiply } from '@iconscout/react-unicons'
import { UilGoogle } from '@iconscout/react-unicons'
import { UilApple } from '@iconscout/react-unicons'


export const SignupModalWindow = ({ signupOpen, setSignupOpen }) => {
   return (
      <div className={signupOpen ? `signup-modal-window signup-modal-window_open` : `signup-modal-window signup-modal-window_close`}>
         <div className="signup-modal-window__body">
            <button 
               className="signup-modal-window__close-button"
               onClick={() => setSignupOpen(!signupOpen)}
            > 
               <UilMultiply className="signup-modal-window__close-button-icon" />
            </button>
            <h2 className="signup-modal-window__title">
               Create an account 
            </h2>
            <form action="" className="signup-modal-window__form">
               <label className="signup-modal-window__label" >
                  Name
                  <input type="text" className="signup-modal-window__name" />
               </label>
               <label className="signup-modal-window__label" >
                  Email
                  <input type="email" className="signup-modal-window__email" />
               </label>
               <label className="signup-modal-window__label">
                  Password
                  <input type="password" className="signup-modal-window__password" />
               </label>
               <label className="signup-modal-window__label">
                  Repeat password
                  <input type="password" className="signup-modal-window__repeat-password" />
               </label>
               <div className="signup-modal-window__or">
                  <div className="signup-modal-window__or-line"></div>
                  <div className="signup-modal-window__or-text">Or</div>
                  <div className="signup-modal-window__or-line"></div>
               </div>
               <div className="signup-modal-window__continue-box">
                  <button className="signup-modal-window__google">
                     <UilGoogle className="signup-modal-window__google-icon" />
                     Continue with Google
                  </button>
                  <button className="signup-modal-window__apple">
                     <UilApple className="signup-modal-window__apple-icon" />
                     Continue with Apple
                  </button>
               </div>
               <button className="signup-modal-window__signup-button">
                  Sign Up
               </button>
            </form>
         </div>
      </div>
   )
}
