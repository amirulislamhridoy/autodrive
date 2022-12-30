import React from 'react';
import Navbar from './Navbar';

const SubBanner = ({url, children}) => {
    return (
        <div className='h-[337px] lg:h-[494px]' style={{background: `linear-gradient(rgba(10, 25, 49, 0.5), rgba(10, 25, 49, 0.5)), url(${url})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                <Navbar></Navbar>
                <div className='w-full h-[calc(100%_-_80px)] flex items-center justify-center'>
                    <h1 className='text-3xl sm:text-5xl uppercase text-white font-semibold'>About Us</h1>
                </div>
            </div>
    );
};

export default SubBanner;