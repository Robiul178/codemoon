import React from 'react';

const DisplayCourse = (props) => {
    const { description, price, title, image, rating, student } = props.course;

    return (
        <div>
            <section>
                <div class="flex">
                    <div class="flex-initial w-4/6 ">
                        <div className="left-side">
                            <div>
                                <div className="card w-96 glass">
                                    <figure><img src="https://placeimg.com/400/225/arch" alt="car!" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Life hack</h2>
                                        <p>How to park your car at your garage?</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Learn now!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" flex-initial w-2/5">
                        <div className="right-side">

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DisplayCourse;