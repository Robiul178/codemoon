import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Faq.css'

const FAQ = () => {
    return (
        <div>
            <div className='faq-page'>
                <div className='relative top-24 text-lg'>
                    <h1>Sorry</h1>
                    <h3>Not complite this page</h3>
                    <Link to='/'>Click here for Back to home page</Link>
                </div>
            </div>
        </div>
    );
};

export default FAQ;