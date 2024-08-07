import React from 'react';
import Image from 'next/image';

export default function Hero() {
    return (
        <div className='relative '>
            <img src="images/heroimg.jpg" alt="Hero Image" className='w-full h-[90vh]  ' />
            <div className='  absolute inset-24 flex-col text-white'>
                <h2 className='text-6xl leading-snug'>Welcome!</h2>
                <p className='roshan text-2xl leading-snug mt-10'>
                    Your Trusted Tool for <br /> Sales forecasting
                </p>

                
            </div>
        </div>
    );
}
