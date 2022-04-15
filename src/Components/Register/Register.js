import React from 'react';
import { Link } from 'react-router-dom';
import logoggl from './../../icons8-google-48.png';
import './../Login/Login.css';

const Register = () => {
    return (
        <div className='w-[500px] h-[650px] my-10 form-container rounded-lg border-[2px] mx-auto'>
            <form className='' >
                <h1 className='text-center my-5 text-4xl'>Register</h1>
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
                <div className='w-[80%] mx-auto'>
                    <label className='text-lg' htmlFor="Email">Confirm Password</label>
                    <br />

                    <input className='border-[1px] w-[100%] h-[40px]' type="password" name="" id="" />
                </div>
                <br />

                <br />
                <div className='w-[80%] mx-auto'>
                    <button className='border-[1px] hover:bg-[#f4a329c3] bg-[#FF99004D] w-[100%] h-[40px]'>Register</button>
                </div>
                <br />
                <div className='w-[80%] mx-auto'>
                    <p className='mx-10 flex'> <span className='block mr-3'>Already have an Account ?</span> <Link to="/login"><span className='text-[#FF9900]'>Log In</span></Link> </p>
                </div>
                <div className='flex h-[50px] justify-evenly items-center'>
                    <hr className='w-[40%] h-0  border-[#FF9900]' />
                    <p>Or</p>
                    <hr className='w-[40%] h-0  border-[#FF9900]' />
                </div>
                <br />

                <div className='w-[80%] mx-auto'>

                    <button className='border-[1px] flex items-center justify-evenly  w-[100%] h-[48px]'><img src={logoggl} alt="" />Continue With Google</button>
                </div>


            </form>

        </div>
    );
};

export default Register;