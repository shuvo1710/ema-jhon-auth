import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UseContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                { user?.uid ? 
                 <button className='btn-signOut'><Link onClick={logOut} to="signup">Sign out</Link></button>
                : 
                <>
                <Link to="signup">Sign Up</Link>
                <Link to="login">Log in</Link>
                </>
                }

                <span>{user?.email}</span>
                {/* <Link>User Name: {user?.name}</Link> */}
            </div>
        </nav>
    );
};

export default Header;