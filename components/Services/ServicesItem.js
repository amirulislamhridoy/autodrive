import React from 'react';

const ServicesItem = ({item}) => {
    return (
        <div className='border p-4 md:p-7 my-2 sm:my-0 hover:shadow-2xl'>
            <img className='w-[72px]' src={item.img} alt=''></img>
            <h3 className='text-xl sm:text-2xl font-bold my-2'>{item.name}</h3>
            <p>{item.description}</p>
            <button className='bg-[#ffc947] py-2 px-5 mt-5 rounded'>Learn More</button>
        </div>
    );
};

export default ServicesItem;