import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
// import image from './img/image.png'
import './CSS/Home.css'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Home = () => {
    return (
        // <div className='main-container max-w-7xl mx-auto'>
        //     <div className="text-side">
        //         <h2 className="text-lg ">Starting with Codecademy best learning Center</h2>
        //         <h1 className="text-5xl font-bold mt-4">Find your best career & get opportunity for your future. </h1>
        //         <p className='mt-6'>World class learning for anyone, anywhere for Increasing Knowledge. Let your creativity shine and start bighting your future today and impress your audiences.</p>
        //         <Link className="btn btn-primary mt-8 normal-case text-xl" to="/courses/:id">Explore Courses</Link>

        //     </div>
        //     <div className='image-side'>
        //         <img className='h-2/3 mt-24' src={image} alt="" />
        //     </div>

        // </div >




        // <div className='flex-container'>
        //             <input className='name' type="text" placeholder='Name' />
        //             <input className='email' type="email" placeholder='Email' />
        //             <button type='submit'>Submit</button>
        //         </div>

        <section className="main">
            <div className='hero'>
                <div className="navbar header-nav max-w-[87%] text-white">
                    <div className="flex-1">
                        <h2> <span
                            className='text-4xl font-bold'
                        >
                            CODEMOON
                        </span>
                            <br />
                            ONLINE EDUCATION PLATFORM
                        </h2>
                    </div>
                    <div className="gap-8">
                        <BsFacebook className='icon'></BsFacebook>
                        <BsInstagram className='icon'></BsInstagram>
                        <BsTwitter className='icon'></BsTwitter>
                        <BsYoutube className='icon' ></BsYoutube>
                    </div>
                </div>

                <div className="navbar relative p-4 bottom-64 max-w-[95%] bg-[#deecee70] text-white">
                    <div className="flex-1">
                        <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
                        <Link className="btn btn-ghost normal-case text-xl" to="/courses/:id">All Course</Link>
                        <Link className="btn btn-ghost normal-case text-xl" to="/">About</Link>
                        <Link className="btn btn-ghost normal-case text-xl" to="/">Team</Link>
                        <Link className="btn btn-ghost normal-case text-xl" to="/faq">FAQ</Link>
                    </div>
                    <div className="text-2xl p-4 bg-slate-700">
                        <h1>GET CERTIFICATE</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home