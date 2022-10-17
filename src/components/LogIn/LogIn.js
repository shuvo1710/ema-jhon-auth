import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UseContext';
import './LogIn.css'

const LogIn = () => {
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const handleSignIn = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        signIn(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            form.reset()
            alert('successfully log in')
            navigate(from, {replace:true})
        })
        .catch(error=>{
            console.error('error', error)
        })
    }
    return (
        <div className='logoin-container'>
            <h2 className='login-title'>Log in</h2>
            <form onSubmit={handleSignIn}>
            <div className="input-container">
                <label htmlFor="Email">Email</label>
                <br />
                <input type="email" name="email" id="" />
            </div>
            <div className="input-container">
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" name="password" id="" />
            </div>
            <button className='btn-submit'>Log in</button>
            </form>
            <p>New to Ema-Jhon <Link to="/signup">Create New Account</Link></p>
        </div>
    );
};

export default LogIn;