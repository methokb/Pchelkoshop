import React from 'react'
import { Link } from 'react-router-dom'
import { Login } from '../../Forms/Login'

export const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <Login />
            <p>
                or <Link to='/Register'>register</Link>
            </p>
        </div>
    )
}
