import React from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    return (
        <div>
            <h1>This is Shop Page</h1>
            <button className="btn btn-outline">Button</button>
            <Link to='/anotherpage'>
                <button className="btn btn-outline btn-primary">Another Page</button>
            </Link>
            <button className="btn btn-outline btn-secondary">Button</button>
            <button className="btn btn-outline btn-accent">Button</button>
        </div>
    );
};

export default Courses;