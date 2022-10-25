import React from 'react';
import './DisplayCourse.css'

const DisplayCourse = (props) => {
    const { description, price, title, image, rating, student } = props.course;

    return (
        <div>

            <div>
                <div className="card glass">
                    <figure><img src={image} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DisplayCourse;