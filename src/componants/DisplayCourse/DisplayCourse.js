import React from 'react';
import { Link } from 'react-router-dom';
import './DisplayCourse.css'

const DisplayCourse = (props) => {
    const { description, id, price, title, image, rating, student } = props.course;

    return (
        <div>

            <div>
                <div className="text-black  card glass w-96 mt-20">
                    <figure><img src={image} alt="car!" /></figure>

                    <h2 className="card-title">{title}</h2>
                    <div className="card-body">
                        <p>{
                            description.length > 150 ?
                                <p>{description.slice(0, 150) + '...'} <Link to={`/readmore/${id}`}>ReadMore</Link> </p>
                                :
                                <p>{description}</p>
                        }</p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default DisplayCourse;