import React, { useEffect, useState } from 'react';
import DisplayCourse from './DisplayCourse/DisplayCourse';
import './CSS/Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        fetch('https://server2-robiul178.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);




    return (
        <div className='home-container'>
            <div className='course-container ml-14'>
                {
                    courses.map(course => <DisplayCourse
                        course={course}
                        key={course.id}
                    ></DisplayCourse>)
                }
            </div>
        </div>
    );
};

export default Courses;