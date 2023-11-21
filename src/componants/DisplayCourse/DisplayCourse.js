import React from 'react';
import { Link } from 'react-router-dom';

const DisplayCourse = (props) => {
    const { description, id, title, image, rating, student } = props.course;

    return (

        <div>
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


            <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div
                        key={i}
                        className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[600px]"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                            alt="AirMax Pro"
                            className="z-0 h-full w-full rounded-md object-cover"
                        />
                        <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-left">
                            <h1 className="text-lg font-semibold text-white">Nike Airmax v2</h1>
                            <p className="mt-2 text-sm text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                            </p>
                            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                                Shop Now &rarr;
                            </button>
                        </div>
                    </div>
                ))}
            </div>




        </div>
    );
};

export default DisplayCourse;