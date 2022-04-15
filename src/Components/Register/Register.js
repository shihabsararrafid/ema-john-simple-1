import React, { useState } from 'react';

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logoggl from './../../icons8-google-48.png';
import './../Login/Login.css';
import right from '../../right.jpg';
import wrong from '../../wrong.png';
const Register = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const signUpWithGoogle = () => {
        createUserWithEmailAndPassword(email, password);
        setTimeout(() => {
            const msg = document.getElementById('success');
            msg.style.display = 'flex';

        }, 100)

        setTimeout(() => {
            const msg = document.getElementById('success');
            msg.style.display = 'none';

        }, 4000)

    }
    const register = (e) => {
        e.preventDefault();
        // createUserWithEmailAndPassword(auth, email, password);
        if (password !== confirmPassword) {
            setTimeout(() => {
                const match = document.getElementById('match');
                match.style.display = 'flex';

            }, 100)

            setTimeout(() => {
                const match = document.getElementById('match');
                match.style.display = 'none';

            }, 4000)
        }
        else if (password === confirmPassword) {
            signUpWithGoogle();


        }

    }
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
        <div className='w-[500px] h-[650px] my-10 form-container rounded-lg border-[2px] mx-auto'>
            <div id='success' className='w-[200px] hidden h-[35px] top-[86px] left-[500px]
             absolute items-center font-semibold form-container bg-white justify-evenly  border-[2px] border-[#FF9900] rounded-lg '>

                <img className='w-[30px]' src={right} alt="" />   <span>Registration Succesful</span>

            </div>
            <form className='' >
                <h1 className='text-center my-5 text-4xl'>Register</h1>
                <div className='w-[80%] mx-auto'>
                    <label className='text-lg' htmlFor="Email">Email</label>
                    <br />

                    <input onChange={(e) => setEmail(e.target.value)} className='border-[1px] w-[100%] h-[40px]' type="email" name="" id="" />
                </div>
                <br />
                <div className='w-[80%] mx-auto'>
                    <label className='text-lg' htmlFor="Email">Password</label>
                    <br />

                    <input onChange={(e) => setPassword(e.target.value)} className='border-[1px] w-[100%] h-[40px]' type="password" name="" id="" />
                </div>
                <br />
                <div className='w-[80%] mx-auto'>
                    <label className='text-lg' htmlFor="Email">Confirm Password</label>
                    <br />

                    <input onChange={(e) => setConfirmPassword(e.target.value)} className='border-[1px] w-[100%] h-[40px]' type="password" name="" id="" />
                </div>
                <br />
                <div id='match' className='mx-auto hidden  w-[75%]'>
                    <img className='w-[20px] h-[20px]' src={wrong} alt="" />
                    <p className='mx-3 text-red-500'>Password didn't match</p>
                </div>

                <br />
                <div className='w-[80%] mx-auto'>
                    <button onClick={register} className='border-[1px] hover:bg-[#f4a329c3] bg-[#FF99004D] w-[100%] h-[40px]'>Register</button>
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

                    <button onClick={() => signInWithGoogle()} className='border-[1px] flex items-center justify-evenly  w-[100%] h-[48px]'><img src={logoggl} alt="" />Continue With Google</button>
                </div>


            </form>

        </div>
    );
};

export default Register;