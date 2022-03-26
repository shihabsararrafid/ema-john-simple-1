import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='Navigation'>
                <img src={logo} alt="" />
                <ul>
                    <a href="/Home">Home</a>
                    <a href="/Orders">Orders</a>
                    <a href="/Orders Review">Orders Review</a>
                    <a href="/about">About</a>
                </ul>
            </nav>
        </div>
    );
};

export default Header;