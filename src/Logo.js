import React from 'react'
import './Logo.css'
import logo from './logo.svg'

function Logo() {
    return (
        <div className='main'>
            <img className='logo' src={logo} alt='logo' />
        </div>
    )
}

export default Logo