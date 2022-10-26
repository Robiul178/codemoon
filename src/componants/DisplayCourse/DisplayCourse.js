import React from 'react';
import { Link } from 'react-router-dom';
import './DisplayCourse.css'

const DisplayCourse = (props) => {
    const { description, id, title, image, rating, student } = props.course;

    return (

        <div>
            {/* <div className="text-black border card w-96 mt-20">
                <figure><img src={image} /></figure>
                <h2 className="card-title">{title}</h2>
                <div className="card-body">
                    <p>{
                        description.length > 150 ?
                            <p>{description.slice(0, 150) + '...'} <Link className="text-blue-700" to={`/readmore/${id}`}>ReadMore</Link> </p>
                            :
                            <p>{description}</p>
                    }</p>
                </div>
            </div> */}

            <div>
                <div className="card w-3/4 mt-20 bg-base-100 shadow-xl">
                    <figure><img src={image} alt="" /></figure>
                    <h2 className="card-title ml-2">{title}</h2>
                    <div className='p-4'>
                        <p>{
                            description.length > 50 ?
                                <p>{description.slice(0, 50) + '...'} <Link className="text-yellow-300" to={`/readmore/${id}`}>ReadMore</Link> </p>
                                :
                                <p>{description}</p>
                        }</p>
                    </div>
                    <div className='flex justify-around border-t border-blue-900'>
                        <p>Rating:{rating.rate}</p>
                        <p>Student:{student}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayCourse;