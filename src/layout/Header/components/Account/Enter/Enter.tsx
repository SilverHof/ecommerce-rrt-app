import React from 'react'
import './Enter.scss'
import { Login } from './Login/Login'
import { Signup } from './Signup/Signup'


export const Enter = () => {
   return (
      <div className="enter">
         <Login />
         <Signup />
      </div>
   )
}
