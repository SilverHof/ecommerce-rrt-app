import React from 'react'
import './Download.scss'
import { UilGooglePlay } from '@iconscout/react-unicons'
import { UilApple } from '@iconscout/react-unicons'
import { UilHospitalSquareSign } from '@iconscout/react-unicons'


export const Download = () => {
   return (
      <div className="download">
         <ul className="download__items">
            <button className="download__google">
               <UilGooglePlay className="download__apple-icon" />
                  Download on the <span>GooglePlay</span>
            </button>
            <button className="download__apple">
               <UilApple className="download__apple-icon" />
                  Download on the <span>AppStore</span>
            </button>
            <button className="download__huawei">
               <UilHospitalSquareSign className="download__huawei-icon" />
                  Download on the <span>HuaweiStore</span>
            </button>
         </ul>
      </div>
   )
}
