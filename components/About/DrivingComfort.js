import React from 'react';

const DrivingComfort = () => {
    return (
        <section className='max-w-7xl mx-2 xl:mx-auto mt-10 md:mt-16 md:grid grid-cols-10 gap-x-12'>
            <div className='col-start-1 col-end-5 self-center'>
                <p className='text-[#185ADB] font-bold'>WORKS</p>
                <h2 className='text-2xl sm:text-4xl font-bold md:mt-2'>DRIVING COMFORT IS OUR PRIORITY</h2>
                <p className='sm:mt-2 md:mt-6'>Quam diam nisi id viverra dui proin quisque. Ridiculus adipiscing feugiat justo, sagittis. Erat amet id netus faucibus.</p>
            </div>
            <div className='mt-1 sm:mt-6 md:mt-0 col-start-5 col-end-11'>
                <iframe className='w-full' width="560" height="315" src="https://www.youtube.com/embed/H35hOow2dtU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </section>
    );
};

export default DrivingComfort;