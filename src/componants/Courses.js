import React, { useEffect, useState } from 'react';
import DisplayCourse from './DisplayCourse/DisplayCourse';
import SideMenu from './DisplayCourse/SideMenu/SideMenu';
import './CSS/Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div className='home-container'>
            {/* <h1>Courses:{courses.length}</h1>
            <Link to='/anotherpage'>
                <button className="btn btn-outline btn-primary">Another Page</button>
            </Link> */}
            <div className='course-container'>
                {
                    courses.map(course => <DisplayCourse
                        course={course}
                        key={course.id}
                    ></DisplayCourse>)
                }
            </div>
            <div className="side-menu">
                {
                    <SideMenu></SideMenu>
                }
            </div>
        </div>
    );
};

export default Courses;