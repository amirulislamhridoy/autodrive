import React from 'react';
import Link from 'next/link';

const CarShortData = (props) => {
    const car = props.car
    return (
        <div className='my-5 lg:my-0 sm:flex shadow-xl bg-white sm:pr-3 rounded-md text-center sm:text-start px-5'>
            <img className='w-6/12 mx-auto' src={car.img} alt=''></img>
            <div className='self-center pb-5 sm:py-5'>
                <h2 className='text-md sm:text-xl font-semibold '>Name: {car.name}</h2>
                <p className='mt-1 '>{car?.description?.slice(0, 74)}...</p>
                <div className='mt-3 lg:mt-2 xl:mt-5'>
                    <p className=' '>Seats: {car.seat}</p>
                    <p className=' '>Gear: {car.gear}</p>
                    <p className=' '>Air Condition: {car.airCondition === 'true' ? 'Yes' : "No"}</p>
                </div>
                <div className='flex justify-between items-center mt-2 lg:mt-0'>
                    <Link className='border-b-2 border-[#ffc947] text-[#474FA0] hover:border-[#474FA0] pb-1 inline-block mt-3 font-bold' href='' as=''>View Details <span className='font-bold'>&gt;</span></Link>
                    <button className='bg-[#ffc947] py-1.5  px-4 rounded'><span className='text-xl sm:text-2xl lg:text-xl xl:text-3xl'>${car.dayHire}</span><span className='font-bold'> / day</span></button>
                </div>
            </div>
        </div>
    );
};

export default CarShortData;