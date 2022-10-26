import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ReadMore = () => {
    const course = useLoaderData();
    return (
        <div>
            This is Read More:{course.title}
        </div>
    );
};

export default ReadMore;