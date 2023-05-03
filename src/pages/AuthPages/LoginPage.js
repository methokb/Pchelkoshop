import React from 'react'
import { Link } from 'react-router-dom'
import { Login } from '../../Forms/Login'
import '../../Forms/Form.css'

export const LoginPage = () => {
    return (
        <div id='main-form'>
            <div className='form'>
                <h1 className='form-header'>Login</h1>
                <Login />
                <p className='form_change'>
                    or <Link className='form_changeBtn' to='/Register'>register</Link>
                </p>
            </div>
        </div>
    )
}
