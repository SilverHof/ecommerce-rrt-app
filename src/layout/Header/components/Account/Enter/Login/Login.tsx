import React, { useState } from 'react'
import './Login.scss'
import { UilUser } from '@iconscout/react-unicons'
import { LoginModalWindow } from '../LoginModalWindow/LoginModalWindow';


export const Login = () => {

   const [loginOpen, setLoginOpen] = useState<boolean>(false);

   return (
      <>
         <button className="login" onClick={() => setLoginOpen(!loginOpen)} >
            <UilUser className="login__icon" />
            <span className="login__text">
               Login
            </span>
         </button>
         <LoginModalWindow 
            loginOpen={loginOpen} 
            setLoginOpen={setLoginOpen} 
         />
      </>
   )
}
