import React from 'react';
import Link from 'next/link';

const CarShortData = (props) => {
    const car = props.car
    console.log(car)
    return (
        <div className='flex gap-x-1 shadow-xl bg-white pr-3'>
            <img className='w-6/12' src={car.img} alt=''></img>
            <div className='self-center'>
                <h2 className='text-xl font-semibold'>Name: {car.name}</h2>
                <p className='mt-1'>{car?.description?.slice(0, 74)}...</p>
                <div className='mt-5'>
                    <p>Seats: {car.seat}</p>
                    <p>Gear: {car.gear}</p>
                    <p>Air Condition: {car.airCondition === 'true' ? 'Yes' : "No"}</p>
                </div>
                <div className='flex justify-between'>
                    <Link className='border-b-2 border-[#ffc947] text-[#474FA0] hover:border-[#474FA0] pb-1 inline-block mt-3 font-bold' href='' as=''>View Details <span className='font-bold'>&gt;</span></Link>
                    <button className='bg-[#ffc947] py-2 px-5 rounded'><span className='text-3xl'>{car.dayHire}</span><span className='font-bold'> / day</span></button>
                </div>
            </div>
        </div>
    );
};

export default CarShortData;