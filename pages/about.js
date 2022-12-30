import React from 'react';
import Navbar from './../components/Navbar'

const about = () => {
    return (
        <section>
            <div className='h-[494px]' style={{background: `linear-gradient(rgba(10, 25, 49, 0.5), rgba(10, 25, 49, 0.5)), url(${'https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/2021/12/hero-about.jpg'})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                <Navbar></Navbar>
                <div className='w-full h-[calc(100%_-_72px)] flex items-center justify-center'>
                    <h1 className='text-5xl uppercase text-white font-semibold'>About Us</h1>
                </div>
            </div>
        </section>
    );
};

export default about;