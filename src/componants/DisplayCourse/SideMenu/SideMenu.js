import React from 'react';

const SideMenu = (props) => {
    const { title, id } = props.course;
    return (
        <div className='container divn'>
            <div className="side-scrool">
                <div className="scrool">
                    <h1>Course {id}: <span>{title}</span></h1>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;