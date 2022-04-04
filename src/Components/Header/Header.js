import React from 'react';
//import logo from '../../images/Logo.svg';
import logo from '../../Logo copy.svg';

import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='Navigation'>
                <img src={logo} alt="" />
                <ul>
                    <a href="/shop">Home</a>
                    <a href="/orders">Orders</a>
                    <a href="/review">Orders Review</a>
                    <a href="/about">About</a>
                </ul>
            </nav>
        </div>
    );
};

export default Header;