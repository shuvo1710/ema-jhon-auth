import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UseContext';

const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSubmit =(event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm)
        if(!(password === confirm)){
            alert('password not same')
            return;
        }
        if(password <= 6){
            alert('please inter a password more then six word')
        }
        createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            form.reset()
            alert('successfully signup')
            
        })
        .catch(error=>{
            console.error('error', error);
        })
        

    }
    return (
        <div className='logoin-container'>
            <h2 className='login-title'>Log in</h2>
            <form onSubmit={handleSubmit}>
            <div className="input-container">
                <label htmlFor="Email">Email</label>
                <br />
                <input type="email" name="email" id="" required />
            </div>
            <div className="input-container">
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" name="password" id="" required />
            </div>
            <div className="input-container">
                <label htmlFor="confirm">Confirm Password</label>
                <br />
                <input type="password" name="confirm" id=""  required/>
            </div>
            <button className='btn-submit'>Sign up</button>
            </form>
            <p>Already have an account? <Link to="/login">Log in</Link></p>
        </div>
    );
};

export default SignUp;