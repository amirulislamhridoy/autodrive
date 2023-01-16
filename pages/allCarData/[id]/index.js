import Navbar from "../../../components/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from '../../../components/Footer';

const Index = () => {
    const [car, setCar] = useState({})
    const router = useRouter()
    const { id } = router.query
    useEffect(() => {
        if (id) {
            // fetch(`http://localhost:5000/car/getCar/${id}`).then(res => res.json())
            // .then(data => console.log(data))
            axios.get(`http://localhost:5000/car/getCar/${id}`).then(res => setCar(res.data))
        }
    }, [id])
    // console.log(Object.values(car.engine))
    return (
        <main>
            <Head><title>CAR DETAILS</title></Head>
            <Navbar>SingleCar</Navbar>
            <section className='max-w-7xl mx-auto border-2 m-2'>
                <div className='flex items-center gap-x-4'>
                    <img src={car?.img} alt='car? image'></img>
                    <div className='mr-4'>
                        <h3 className='text-2xl font-semibold'>{car?.name}</h3>
                        <article className='mt-3 text-justify'>{car?.description}</article>
                        <button className='bg-[#ffc947] py-1.5 px-4 rounded mt-5'><span className='text-xl sm:text-2xl lg:text-xl xl:text-3xl'>${car.dayHire}</span><span className='font-bold'> / day</span></button>
                    </div>
                </div>
                <div className="">
                    {(car?.gear || car?.fuel || car?.seat) && <div className='m-4 mt-0 border-2 py-2 px-3'>
                        <h3 className='text-2xl mb-1 bg-gray-200 px-3'>Basic</h3>
                        {car?.seat && <p className='grid grid-cols-2 px-3'><span>Seats</span> <span>{car?.seat}</span></p>}
                        {car?.gear && <p className='grid grid-cols-2 px-3'><span>Gear</span> <span>{car?.gear}</span></p>}
                        {car?.fuel && <p className='grid grid-cols-2 px-3'><span>Fuel</span> <span>{car?.fuel}</span></p>}
                    </div>}
                    { car?.engine && (Object.values(car?.engine).length) > 1 && <div className='m-4 border-2 py-2 px-3'>
                        {car?.engine?.title && <h3 className='text-2xl mb-1 bg-gray-200 px-3'>{car?.engine?.title}</h3>}
                        {car?.engine?.engineType && <p className='grid grid-cols-2 px-3'><span>Engine Type</span> <span>{car?.engine?.engineType}</span></p>}
                        {car?.engine?.displacement && <p className='grid grid-cols-2 px-3'><span>Displacement</span> <span>{car?.engine?.displacement}</span></p>}
                        {car?.engine?.horsePower && <p className='grid grid-cols-2 px-3'><span>Horse Power</span> <span>{car?.engine?.horsePower}</span></p>}
                        {car?.engine?.torque && <p className='grid grid-cols-2 px-3'><span>Torque</span> <span>{car?.engine?.torque}</span></p>}
                    </div>}
                    { car?.dimension && (Object.values(car?.dimension).length) > 1 && <div className='m-4 border-2 py-2 px-3'>
                        {car?.dimension?.title && <h3 className='text-2xl mb-1 bg-gray-200 px-3'>{car?.dimension?.title}</h3>}
                        {car?.dimension?.overallLength && <p className='grid grid-cols-2 px-3'><span>Engine Type</span> <span>{car?.dimension?.overallLength}</span></p>}
                        {car?.dimension?.overallWidth && <p className='grid grid-cols-2 px-3'><span>Displacement</span> <span>{car?.dimension?.overallWidth}</span></p>}
                        {car?.dimension?.overallHealth && <p className='grid grid-cols-2 px-3'><span>Horse Power</span> <span>{car?.dimension?.overallHeight}</span></p>}
                        {car?.dimension?.doors && <p className='grid grid-cols-2 px-3'><span>Torque</span> <span>{car?.dimension?.doors}</span></p>}
                    </div>}
                    { car?.steering && (Object.values(car?.steering).length) > 1 && <div className='m-4 border-2 py-2 px-3'>
                        {car?.steering?.title && <h3 className='text-2xl mb-1 bg-gray-200 px-3'>{car?.steering?.title}</h3>}
                        {car?.steering?.powerAssisted && <p className='grid grid-cols-2 px-3'><span>Power Assisted</span> <span>{car?.steering?.powerAssisted}</span></p>}
                        {car?.steering?.miniumTurningRadius && <p className='grid grid-cols-2 px-3'><span>Displacement</span> <span>{car?.steering?.miniumTurningRadius}</span></p>}
                    </div>}
                    { car?.suspension && (Object.values(car?.suspension).length) > 1 && <div className='m-4 border-2 py-2 px-3'>
                        {car?.suspension?.title && <h3 className='text-2xl mb-1 bg-gray-200 px-3'>{car?.suspension?.title}</h3>}
                        {car?.suspension?.frontSuspension && <p className='grid grid-cols-2 px-3'><span>Front Suspension</span> <span>{car?.suspension?.frontSuspension}</span></p>}
                        {car?.suspension?.rearSuspension && <p className='grid grid-cols-2 px-3'><span>Rear Suspension</span> <span>{car?.suspension?.rearSuspension}</span></p>}
                        {car?.suspension?.fontBrake && <p className='grid grid-cols-2 px-3'><span>Front Brake</span> <span>{car?.suspension?.fontBrake}</span></p>}
                        {car?.suspension?.rearBrake && <p className='grid grid-cols-2 px-3'><span>Rear Brake</span> <span>{car?.suspension?.rearBrake}</span></p>}
                    </div>}
                    { car?.wheel && (Object.values(car?.wheel).length) > 1 && <div className='m-4 border-2 py-2 px-3'>
                        {car?.wheel?.title && <h3 className='text-2xl mb-1 bg-gray-200 px-3'>{car?.wheel?.title}</h3>}
                        {car?.wheel?.wheelType && <p className='grid grid-cols-2 px-3'><span>Whheel Type</span> <span>{car?.wheel?.wheelType}</span></p>}
                        {car?.wheel?.wheelBase && <p className='grid grid-cols-2 px-3'><span>Wheel Base</span> <span>{car?.wheel?.wheelBase}</span></p>}
                        {car?.wheel?.wheelSize && <p className='grid grid-cols-2 px-3'><span>Wheel size</span> <span>{car?.wheel?.wheelSize}</span></p>}
                        {car?.wheel?.tyreSize && <p className='grid grid-cols-2 px-3'><span>Tyre Size</span> <span>{car?.wheel?.tyreSize}</span></p>}
                        {car?.wheel?.spareTyre && <p className='grid grid-cols-2 px-3'><span>Spare Tyre</span> <span>{car?.wheel?.spareTyre}</span></p>}
                    </div>}
                    { car?.mileage && (Object.values(car?.mileage).length) > 1 && <div className='m-4 border-2 py-2 px-3'>
                        {car?.mileage?.title && <h3 className='text-2xl mb-1 bg-gray-200 px-3'>{car?.mileage?.title}</h3>}
                        {car?.mileage?.mileage && <p className='grid grid-cols-2 px-3'><span>Mileage</span> <span>{car?.mileage?.mileage}</span></p>}
                        {car?.mileage?.mileageHybrid && <p className='grid grid-cols-2 px-3'><span>Mileage Hybrid</span> <span>{car?.mileage?.mileageHybrid}</span></p>}
                    </div>}
                    { car?.safety && (Object.values(car?.safety).length) > 1 && <div className='m-4 border-2 py-2 px-3'>
                        {car?.safety?.title && <h3 className='text-2xl mb-1 bg-gray-200 px-3'>{car?.safety?.title}</h3>}
                        {car?.safety?.seatbelts && <p className='grid grid-cols-2 px-3'><span>Seatbelts</span> <span>{car?.safety?.seatbelts}</span></p>}
                        {car?.safety?.immobilizer && <p className='grid grid-cols-2 px-3'><span>Immobilizer</span> <span>{car?.safety?.immobilizer}</span></p>}
                        {car?.safety?.childLock && <p className='grid grid-cols-2 px-3'><span>Child Lock</span> <span>{car?.safety?.childLock}</span></p>}
                        {car?.safety?.antiLockBrakingSystem && <p className='grid grid-cols-2 px-3'><span>Anti Lock Braking System</span> <span>{car?.safety?.antiLockBrakingSystem}</span></p>}
                    </div>}
                </div>
            </section>
            <Footer></Footer>
        </main>
    );
};

export default Index;