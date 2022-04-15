import React from 'react';
import { Link } from 'react-router-dom';
import bannerLogo from './../../fashion-portrait-young-businessman-handsome-model-man-casual-cloth-suit-with-accessories-hands (1).png';
const Home = () => {
    return (
        <div className='flex items-center '>

            <div className="left-banner mx-10">
                <h1 className='text-5xl font-semibold text-center'>New Collection For All</h1>
                <marquee className="text-[#FF9900]" >Save up to 70%</marquee>
                <p className='text-xl text-justify'>Discover all the new arrivals of ready-to-wear collection</p>
                <button className='border-[2px] text-2xl bg-[#FF9900] uppercase py-5 px-8 block mx-auto my-10 rounded-lg'> <Link to="/shop">Shop Now</Link> </button>
            </div>
            <div className="right-banner mx-10">
                <img className='w-[80%] block mx-10 my-10 h-[550px]' src={bannerLogo} alt="" />
            </div>
        </div>
    );
};

export default Home;