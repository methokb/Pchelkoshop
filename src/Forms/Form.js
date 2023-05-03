import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css'

const Form = ({ title, handleAuth }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const push = useNavigate()

    return (
        <div id='fancy-inputs'>
            <form onSubmit={handleAuth}>
                <div className="title">Welcome</div>
                <div className="subtitle">Let's create your account!</div>
                <div className="input-container ic2">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} id="lastname" className="input" type="email" required placeholder=" " />
                    <div className="cut"></div>
                    <label for="lastname" className="placeholder">Email</label>
                </div>
                <div className="input-container ic2">
                    <input value={pass} onChange={(e) => setPass(e.target.value)} id="email" className="input" type="password" placeholder=" " required />
                    <div className="cut cut-short"></div>
                    <label for="email" className="placeholder">Password</label>
                </div>
                <button onClick={() => push('/')} className="submit">{title}</button>
            </form>
        </div>
    )
}

export { Form }