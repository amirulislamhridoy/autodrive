import Link from 'next/link';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query'
import CarShortData from '../Car/CarShortData';
import Loading from '../Loading'

const HomeCarData = () => {
    const { isLoading, error, data: cars } = useQuery('carData', () =>
        // if I want to use dependence this time will be (useQuery(['repoData', dependence items],.....))
        fetch('http://localhost:5000/car/getAll').then(res =>
            res.json()
        )
    )
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <section className='bg-[#f4f6fa]'>
            <div className='max-w-7xl mx-auto pt-20 pb-16'>
                <h1 className='text-5xl text-center font-bold'>WE OFFER BEST CAR</h1>
                <p className='text-center mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className='mx-3 lg:mx-1 lg:grid grid-cols-2 gap-4 mt-8'>
                    {cars?.slice(0, 6)?.map((car, i) => <CarShortData key={i} car={car}></CarShortData>)}
                </div>
                <div className='mt-5 text-center'><Link className='text-2xl border-b-2 border-[#ffc947] text-[#474FA0] hover:border-[#474FA0] pb-2' href='http://localhost:3000/allCarData' as=''>All Car Data View &gt;</Link></div>
            </div>
        </section>
    );
};

export default HomeCarData;