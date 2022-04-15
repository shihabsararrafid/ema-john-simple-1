import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoggl from './../../icons8-google-48.png';
import './Login.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Result } from 'postcss';
import right from '../../right.jpg';
import loadingpic from './../../loading.png';
const Login = () => {
    const [visibity, setVisibity] = useState(0);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);




    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p><img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="" /></p>;
    }
    if (user) {
        setTimeout(() => {
            const msg = document.getElementById('success');
            msg.style.display = 'flex';

        }, 100)

        setTimeout(() => {
            const msg = document.getElementById('success');
            msg.style.display = 'none';

        }, 4000)
    }





    return (
        <div>
            <div id='success' className='w-[200px] hidden h-[35px] top-[86px] left-[500px]
             absolute items-center font-semibold form-container bg-white justify-evenly  border-[2px] border-[#FF9900] rounded-lg '>

                <img className='w-[30px]' src={right} alt="" />   <span>Login Succesful</span>

            </div>
            <div className='w-[500px] h-[600px] my-16 form-container rounded-lg border-[2px] mx-auto'>

                <form className='' >

                    <h1 className='text-center my-5 text-4xl'>Log In</h1>
                    <div className='w-[80%] mx-auto'>
                        <label className='text-lg' htmlFor="Email">Email</label>
                        <br />

                        <input className='border-[1px] w-[100%] h-[40px]' type="email" name="" id="" />
                    </div>
                    <br />
                    <div className='w-[80%] mx-auto'>
                        <label className='text-lg' htmlFor="Email">Password</label>
                        <br />

                        <input className='border-[1px] w-[100%] h-[40px]' type="password" name="" id="" />
                    </div>
                    <br />
                    <br />
                    <div className='w-[80%] mx-auto'>
                        <button className='border-[1px] bg-[#FF99004D] w-[100%] h-[40px]'>Log In</button>
                    </div>
                    <br />
                    <div className='w-[80%] mx-auto'>
                        <p className='mx-10 flex'> <span className='block mr-3'>New to Ema- John?</span> <Link to="/register"><span className='text-[#FF9900]'>Create New Account</span></Link> </p>
                    </div>
                    <div className='flex h-[50px] justify-evenly items-center'>
                        <hr className='w-[40%] h-0  border-[#FF9900]' />
                        <p>Or</p>
                        <hr className='w-[40%] h-0  border-[#FF9900]' />
                    </div>
                    <br />

                    <div className='w-[80%] mx-auto'>

                        <button onClick={() => signInWithGoogle()} className='border-[1px] flex items-center justify-evenly  w-[100%] h-[48px]'><img src={logoggl} alt="" />Log In With Google</button>
                    </div>


                </form>

            </div>
        </div>

    );
};

export default Login;