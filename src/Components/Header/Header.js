import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
//import logo from '../../images/Logo.svg';
import logo from '../../Logo copy.svg';
import logOut from '../../logout.jpg';
import './Header.css'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const signout = () => {
        signOut(auth)
            .then(() => {
                setTimeout(() => {
                    const msg = document.getElementById('signOut');
                    msg.style.display = 'flex';

                }, 100)

                setTimeout(() => {
                    const msg = document.getElementById('signOut');
                    msg.style.display = 'none';

                }, 4000)
            }).catch((error) => {
                // An error happened.
            });
    }
    console.log(user);
    return (
        <div>
            <nav className='Navigation'>
                <img src={logo} alt="" />
                <ul className='flex items-center'>

                    <Link to="/shop">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/review">Orders Review</Link>
                    <Link to="/about">About</Link>
                    {
                        user ? <button onClick={signout} className='text-white block ml-3 hover:text-red-500 duration-300'>Sign Out</button> : <Link to="/login">Login</Link>
                    }
                    {
                        user ?
                            <div className='flex items-center ml-1'>
                                <Link to="/customerdetails"> <p className='text-blue-600 mr-2 font-semibold'>{user?.displayName}</p></Link>
                                <img className='w-[50px] h-[49px]  rounded-full' src={user?.photoURL} alt="" />
                            </div>
                            : ""
                    }

                </ul>
            </nav>
            <div id='signOut' className='w-[200px] hidden h-[35px] top-[86px] left-[500px]
             absolute items-center font-semibold form-container bg-white justify-evenly  border-[2px] border-[#FF9900] rounded-lg '>

                <img className='w-[30px]' src={logOut} alt="" />   <span>Sign Out Succesful</span>

            </div>
        </div>
    );
};

export default Header;