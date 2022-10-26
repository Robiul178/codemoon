import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import '../CSS/ReadMore.css';

const ReadMore = () => {
    const course = useLoaderData();
    const { description, price, title, image, student, rating } = course;
    return (
        <div className='rm-container'>
            <div>
                <img src={image} alt="" />
            </div>
            <div className='text-left p-4'>
                <h1 className='font-bold text-4xl text-yellow-300'>{title}</h1> <br />
                <div className='flex font-bold'>
                    <div className=' p-3 mr-4 mb-4 shadow-2xl'>
                        <h2>Course Duration</h2>
                        <h2>6 Month</h2>
                    </div>
                    <div className='shadow-2xl p-3 mr-4 mb-4'>
                        <h2>Lecture</h2>
                        <h2>48</h2>
                    </div>
                    <div className='shadow-2xl p-3 mr-4 mb-4'>
                        <h2>Project</h2>
                        <h2>10+</h2>
                    </div>
                </div>
                <p className='text-2xl'>{description}</p>
                <div className="flex mt-6 justify-around">
                    <p>Price:{price}</p>
                    <p>Rating:{rating.rate}</p>
                    <p>Student:{student}</p>
                    <Link to='/anotherpage'>
                        <button className="btn btn-outline btn-primary">Another Page</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ReadMore;