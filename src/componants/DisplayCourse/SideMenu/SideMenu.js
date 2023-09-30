import React from 'react';
import './SideMenu.css';
import { Link } from 'react-router-dom';


const SideMenu = (props) => {

    const { title, id } = props.course;


    return (
        <div className=' main-container '>
            <div className="side-scrool shadow-xl">
                <div className="scrool">
                    <h1>Course {id}: <span>{title}</span></h1>
                    <Link className="text-yellow-300" to={`/readmore/${id}`}>See More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;