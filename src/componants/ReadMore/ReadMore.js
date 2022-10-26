import React from 'react';
import { useLoaderData } from 'react-router-dom';
import '../CSS/ReadMore.css';

const ReadMore = () => {
    const course = useLoaderData();
    const { description, price, title, image, student, rate } = course;
    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default ReadMore;