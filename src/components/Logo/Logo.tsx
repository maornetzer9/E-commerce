import React from 'react'
import { LOGOS } from '../../mock/logos.mock';
import './style.css'


const Logo: React.FunctionComponent = () => {
  return (
    <div id='logo_container'>
        {LOGOS.map((logo, index) => {
            return (
                <div 
                    key={index}>
                        <img 
                        src={logo.path} 
                        alt="Logo" 
                    />
                </div>
            )
        })}
    </div>
  )
}


export default Logo;