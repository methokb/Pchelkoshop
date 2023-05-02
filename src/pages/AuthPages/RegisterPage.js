import React from 'react'
import { SignUp } from '../../Forms/SignUp'
import { Link } from 'react-router-dom'

export const RegisterPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <SignUp />
            <p>
                Already have an account ?<Link to='/Login'>Sign in</Link>
            </p>
        </div>
    )
}
