import React from 'react';
import { Link } from 'react-router-dom';

const NotFound404 = () => {
    return (
        <div>
            <div className='absolute top-20 left-20 text-lg'>
                <h1>Sorry</h1>
                <h3>You search wrong page.</h3>
                <Link to='/'>Click here for Back to home page</Link>
            </div>
        </div>
    );
};

export default NotFound404;