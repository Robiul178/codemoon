import React, { useEffect, useState } from 'react';
import DisplayCourse from './DisplayCourse/DisplayCourse';

const Courses = () => {
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div>
            {/* <h1>Courses:{courses.length}</h1>
            <Link to='/anotherpage'>
                <button className="btn btn-outline btn-primary">Another Page</button>
            </Link> */}
            <div>
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