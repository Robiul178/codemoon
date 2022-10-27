import React from 'react';
import image from './img/image.png'
import './CSS/Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='main-container'>
            <div className="text-side">
                <h2 className="text-lg ">Starting with Codecademy best learning Center</h2>
                <h1 className="text-5xl font-bold mt-4">Find your best career & get opportunity for your future. </h1>
                <p className='mt-6'>World class learning for anyone, anywhere for Increasing Knowledge. Let your creativity shine and start bighting your future today and impress your audiences.</p>
                <Link className="btn btn-primary mt-8 normal-case text-xl" to="/courses/:id">Explore Courses</Link>

            </div>
            <div className='image-side'>
                <img className='h-2/3 mt-24' src={image} alt="" />
            </div>

        </div >
    );
};

export default Home;