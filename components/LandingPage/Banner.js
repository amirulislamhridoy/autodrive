import { useEffect, useState } from "react";
import Navbar from "../Navbar";
const axios = require('axios');
import { toast } from 'react-toastify';

const Banner = () => {
    const [locations, setLocations] = useState([])
    const [cars, setCars] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/api/carData')
            .then(function (response) {
                setCars(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    useEffect(() => {
        axios.get('http://localhost:3000/api/location')
            .then(function (response) {
                setLocations(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    const fromSubmit = (e) => {
        e.preventDefault()
        const location = e.target.location.value
        const car = e.target.car.value
        const start = e.target.startDate.value
        const end = e.target.endDate.value
        console.log(start)
        if((location === 'Pick Us Location') && (car === 'Car Name')){
            return toast.error('Please select location & car name.')
        }else if(location === 'Pick Us Location'){
            return toast.error('Please select car name.')
        }else if(car === 'Car Name'){
            return toast.error('Please select car name')
        }
    }
    return (
        <section className='bg-cover bg-fixed bg-center bg-no-repeat bg-no-repeat min-h-screen' style={{ backgroundImage: ` linear-gradient(rgba(10, 25, 49, 0.5), rgba(10, 25, 49, 0.7)), url('https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/2021/12/hero-home.jpg')` }}>
            <Navbar></Navbar>
            <div className='max-w-7xl mx-auto flex flex-col justify-end' style={{ minHeight: `calc(100vh - 200px` }}>
                <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center md:mb-5'>Hire The Best Car At <br /> The Best Price</h1>
                <p className='text-white text-center mx-1 sm:mx-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                <div className='mt-8 lg:mt-10 xl:mt-14 xl:mx-0 mx-2'>
                    <h3 className='text-white font-bold my-4'>BOOK YOUR CAR</h3>
                    <div className='p-7 bg-[#0a1931]'>
                        <form onSubmit={fromSubmit} className='flex gap-x-2 gap-y-1 flex-wrap'>
                            <select name='location' className="flex-1 form-select form-select-lg block w-full px-4 py-2 font-normal bg-white bg-clip-padding bg-no-repeat transition ease-in-out m-0 focus:outline-none min-w-[170px]" aria-label=".form-select-lg example">
                                <option className='hidden' defaultValue>Pick Us Location</option>
                                {locations?.map(location => <option key={location._id} vlaue={location.name}>{location.name}</option>)}
                            </select>

                            <select name='car' className="flex-1 form-select form-select-lg block w-full px-4 py-2 font-normal bg-white bg-clip-padding bg-no-repeat transition ease-in-out m-0 focus:outline-none min-w-[170px]" aria-label=".form-select-lg example">
                                <option className='hidden' defaultValue>Car Name</option>
                                {cars?.map(car => <option key={car._id} vlaue={car.name}>{car.name}</option>)}
                            </select>
                            {/* type="text" onFocus={(e) => e.target.type = 'date'} */}
                            <input name='startDate' type='date' className="flex-1 block w-full py-2 sm:py-4 px-4 outline-0 min-w-[170px]" required />
                            <input name="endDate" type="text" onFocus={(e) => e.target.type = 'date'} className="flex-1 block w-full py-2 sm:py-4 px-4 outline-0 min-w-[170px]" placeholder="End Date " />

                            <button className='flex-1 bg-[#ffc947] min-w-[170px] py-2 sm:py-4'>
                                BOOK NOW
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;