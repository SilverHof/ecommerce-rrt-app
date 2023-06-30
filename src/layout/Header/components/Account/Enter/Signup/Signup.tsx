import React, { useState } from 'react'
import './Signup.scss'
import { UilSignout } from '@iconscout/react-unicons'
import { SignupModalWindow } from '../SignupModalWindow/SignupModalWindow';


export const Signup = () => {

   const [signupOpen, setSignupOpen] = useState<boolean>(false);

   return (
      <>
         <button className="signup" onClick={() => setSignupOpen(!signupOpen)} >
            <UilSignout className="signup__icon" />
            <span className="signup__text">
               Sign Up
            </span>
         </button>
         <SignupModalWindow 
            signupOpen={signupOpen}
            setSignupOpen={setSignupOpen}
         />
      </>
   )
}
