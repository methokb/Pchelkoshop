import React from 'react'
import { SignUp } from '../../Forms/SignUp'
import { Link } from 'react-router-dom'
import '../../Forms/Form.css'

export const RegisterPage = () => {
    return (
        <div id='main-form'>
            <div className='form'>
                <h1 className='form-header'>Login</h1>
                <SignUp />
                <p className='form_change'>
                    Already have an account ?<Link className='form_changeBtn' to='/Login'>Sign in</Link>
                </p>
            </div>
        </div>
    )
}
