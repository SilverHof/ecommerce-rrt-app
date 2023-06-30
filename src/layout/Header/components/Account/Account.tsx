import React, { useState } from 'react'
import './Account.scss'
import { Enter } from './Enter/Enter';
import { User } from './User/User';


export const Account = () => {

   const [isAuth, setIsAuth] = useState<boolean>(false);

   return (
      <div className="account">
         {
            isAuth
            ?
            <User />
            :
            <Enter /> 
         }
      </div>
   )
}
