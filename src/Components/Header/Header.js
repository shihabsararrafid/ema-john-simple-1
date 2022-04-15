import React from 'react';
import { Link } from 'react-router-dom';
//import logo from '../../images/Logo.svg';
import logo from '../../Logo copy.svg';

import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='Navigation'>
                <img src={logo} alt="" />
                <ul>

                    <Link to="/shop">Home</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/review">Orders Review</Link>
                    <Link to="/about">About</Link>
                    <Link to="/login">Login</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;