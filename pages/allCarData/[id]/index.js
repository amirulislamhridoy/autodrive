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
                    <div className='m-4 mt-0 border-2 py-2 px-3'>
                        <h3 className='text-2xl text-gray-500 mb-1'>Basic</h3>
                        <p className='grid grid-cols-2 bg-gray-200 px-3'><span>Seats</span> <span>{car?.seat}</span></p>
                        <p className='grid grid-cols-2 px-3'><span>Gear</span> <span>{car?.gear}</span></p>
                        <p className='grid grid-cols-2 px-3'><span>Fuel</span> <span>{car?.fuel}</span></p>
                    </div>
                    <div className='m-4 border-2 py-2 px-3'>
                        <h3 className='text-2xl text-gray-500 mb-1'>{car?.engine?.title}</h3>
                        <p className='grid grid-cols-2 bg-gray-200 px-3'><span>Engine Type</span> <span>{car?.engine?.engineType}</span></p>
                        <p className='grid grid-cols-2 px-3'><span>Displacement</span> <span>{car?.engine?.displacement}</span></p>
                        <p className='grid grid-cols-2 px-3'><span>Horse Power</span> <span>{car?.engine?.horsePower}</span></p>
                        <p className='grid grid-cols-2 px-3'><span>Torque</span> <span>{car?.engine?.torque}</span></p>
                    </div>
                    <div className='m-4 border-2 py-2 px-3'>
                        <h3 className='text-2xl text-gray-500 mb-1'>{car?.dimension?.title}</h3>
                        <p className='grid grid-cols-2 bg-gray-200 px-3'><span>Engine Type</span> <span>{car?.dimension?.overallLength}</span></p>
                        <p className='grid grid-cols-2 px-3'><span>Displacement</span> <span>{car?.dimension?.overallWidth}</span></p>
                        <p className='grid grid-cols-2 px-3'><span>Horse Power</span> <span>{car?.dimension?.overallHeight}</span></p>
                        <p className='grid grid-cols-2 px-3'><span>Torque</span> <span>{car?.dimension?.doors}</span></p>
                    </div>
                    <div className='m-4 border-2 py-2 px-3'>
                        <h3 className='text-2xl text-gray-500 mb-1'>{car?.steering?.title}</h3>
                        <p className='grid grid-cols-2 bg-gray-200 px-3'><span>Power Assisted</span> <span>{car?.steering?.powerAssisted}</span></p>
                        <p className='grid grid-cols-2 px-3'><span>Displacement</span> <span>{car?.steering?.miniumTurningRadius}</span></p>
                    </div>
                    <div className='m-4 border-2 py-2 px-3'>
                        <h3 className='text-2xl text-gray-500 mb-1'>{car?.suspension?.title}</h3>
                        <p className='grid grid-cols-2 bg-gray-200 px-3'><span>Front Suspension</span> <span>{car?.suspension?.frontSuspension}</span></p>
                        <p className='grid grid-cols-2 px-3'><span>Rear Suspension</span> <span>{car?.suspension?.rearSuspension}</span></p>
                        <p className='grid grid-cols-2 px-3'><span>Front Brake</span> <span>{car?.suspension?.fontBrake}</span></p>
                        <p className='grid grid-cols-2 px-3'><span>Rear Brake</span> <span>{car?.suspension?.rearBrake}</span></p>
                    </div>
                    <div className='m-4 border-2 py-2 px-3'>
                        <h3 className='text-2xl text-gray-500 mb-1'>{car?.wheel?.title}</h3>
                        <p className='grid grid-cols-2 bg-gray-200 px-3'><span>Whheel Type</span> <span>{car?.wheel?.wheelType}</span></p>
                        <p className='grid grid-cols-2 px-3'><span>Wheel Base</span> <span>{car?.wheel?.wheelBase}</span></p>
                        <p className='grid grid-cols-2 px-3'><span>Wheel size</span> <span>{car?.wheel?.wheelSize}</span></p>
                        <p className='grid grid-cols-2 px-3'><span>Tyre Size</span> <span>{car?.wheel?.tyreSize}</span></p>
                        <p className='grid grid-cols-2 px-3'><span>Spare Tyre</span> <span>{car?.wheel?.spareTyre}</span></p>
                    </div>
                    <div className='m-4 border-2 py-2 px-3'>
                        <h3 className='text-2xl text-gray-500 mb-1'>{car?.mileage?.title}</h3>
                        <p className='grid grid-cols-2 bg-gray-200 px-3'><span>Mileage</span> <span>{car?.mileage?.mileage}</span></p>
                        <p className='grid grid-cols-2 px-3'><span>Mileage Hybrid</span> <span>{car?.mileage?.mileageHybrid}</span></p>
                    </div>
                    <div className='m-4 border-2 py-2 px-3'>
                        <h3 className='text-2xl text-gray-500 mb-1'>{car?.safety?.title}</h3>
                        <p className='grid grid-cols-2 px-3'><span>Seatbelts</span> <span>{car?.safety?.seatbelts}</span></p>
                        <p className='grid grid-cols-2 px-3'><span>Immobilizer</span> <span>{car?.safety?.immobilizer}</span></p>
                        <p className='grid grid-cols-2 px-3'><span>Child Lock</span> <span>{car?.safety?.childLock}</span></p>
                        <p className='grid grid-cols-2 px-3'><span>Anti Lock Braking System</span> <span>{car?.safety?.antiLockBrakingSystem}</span></p>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </main>
    );
};

export default Index;
