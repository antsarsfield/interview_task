import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className='background'>
            <p className='title'>Support Login</p>
            <p className='input-heading'>Email Address</p>
            <input className='input-field' type="email" />
            <p className='input-heading'>Password</p>
            <input className='input-field' type="text" />
            <button className='login-button'>Login</button>
            <a className='register' href='/'>or Register</a>
        </div>
    )
}

export default Login