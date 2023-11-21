import React, { useEffect, useState } from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import './CSS/Home.css'
import { Link } from 'react-router-dom';
import DisplayCourse from './DisplayCourse/DisplayCourse';

const Home = () => {





    return (
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
                        <h2>GET CERTIFICATE</h2>
                    </div>
                </div>
                <div className="absolute left-24 bottom-32 text-start">
                    <p>Start Learning Today</p>
                    <h1> <span className='font-bold'>Learn</span> Your Desired <span className='font-bold'>Skill</span> <br /> From The <span className='font-bold'>Experts</span> </h1>
                    <h3>Pick A Course From Thousands We Have</h3>
                    <div className="flex">
                        <input className='srce' type="text" value="Type your Keyword" />
                        <input type="button" value="SUBMIT" className='btn-srce' />
                    </div>
                </div>
            </div> <br />

            <div className='second-section'>
                <div class="grid grid-cols-4 gap-4">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>


            </div>
            <DisplayCourse></DisplayCourse>

        </section>
    );
};

export default Home