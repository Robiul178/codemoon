import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Checkout.css'

const CheckOut = () => {
    const chechoutCourse = useLoaderData();
    const { image, price, title, id } = chechoutCourse;
    return (
        <div className='checkout-page mt-20'>
            <div className="payment-method">
                <p className='text-lg mb-4'>Proceed with mobile number & email to complete the payment</p>
                <input type="text" placeholder="Your Email" className="input input-bordered input-info w-full  max-w-lg" /> <br />
                <input type="text" placeholder="Your Phone Number" className="mt-2 input input-bordered input-info w-full max-w-lg" />
            </div>
            <div className="selected-course border">
                <div className='flex'>
                    <img className='w-20' src={image} alt="" />
                    <h1 className='text-xl'>{title}</h1>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;