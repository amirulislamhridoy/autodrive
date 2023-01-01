import Link from 'next/link';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query'
import CarShortData from '../CarShortData';

const HomeCarData = () => {
    const { isLoading, error, data: cars } = useQuery('repoData', () =>
        // if I want to use dependence this time will be (useQuery(['repoData', dependence items],.....))
        fetch('http://localhost:3000/api/carData').then(res =>
            res.json()
        )
    )
    return (
        <section className='bg-[#f4f6fa]'>
            <div className='max-w-7xl mx-auto mt-20 mb-16'>
                <h1 className='text-5xl text-center font-bold'>WE OFFER BEST CAR</h1>
                <p className='text-center mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className='grid grid-cols-2 gap-4 mt-8'>
                    {cars?.slice(0, 6)?.map((car, i) => <CarShortData key={i} car={car}></CarShortData>)}
                </div>
                <Link href='' as=''></Link>
            </div>
        </section>
    );
};

export default HomeCarData;