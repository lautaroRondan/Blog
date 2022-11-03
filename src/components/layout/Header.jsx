import React from 'react'
import LR from '../../../public/LR.svg'

const Header = () => {
  return (
    <header className="header">
            <div className="logo">
            <img src={LR}/>
            </div>
            
            <h1>Mi Blog</h1>
        </header>
  )
}

export default Header
