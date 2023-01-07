import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Banner = () => {
    const router = useRouter()
    const [locations, setLocations] = useState([])
    const [cars, setCars] = useState([])
    const [range, setRange] = useState(new Date())
    const pastMonth = new Date()
    const [user, loading, error] = useAuthState(auth);
    let footer;
    if (range?.from) {
        if (!range.to) {
          footer = <p>{format(range.from, 'PPP')}</p>;
        } else if (range.to) {
          footer = (
            <p>
              {format(range.from, 'PPP')}–{format(range.to, 'PPP')}
            </p>
          );
        }
      }
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
        if(!user){
            router.push('/login')
            return toast.error("First you should login in this website.")
        }
        const location = e.target.location.value
        const car = e.target.car.value
        const date = e.target.date.value
        const number = e.target.number.value
        if ((location === 'Pick Us Location') && (car === 'Car Name')) {
            return toast.error('Please select location & car name.')
        } else if (location === 'Pick Us Location') {
            return toast.error('Please select car name.')
        } else if (car === 'Car Name') {
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
                            <div className='flex-1 min-w-[170px] relative group'>
                                <input name='date' type='text' value={`${range?.from ? format(range?.from, 'PPP'): 'Date'}${range?.to ? `-${format(range?.from, 'PPP')}`: ""}`} className="block w-full py-2 sm:py-4 px-4 outline-0" placeholder="Date" required />
                                <DayPicker
                                className='Day-Picker group-hover:block hidden absolute bg-white sm:p-5 rounded-xl rounded-br-none right-0 lg:right-auto lg:left-0 lg:rounded-bl-none shadow-xl overflow-x-auto whitespace-nowrap top-[-232px] sm:top-[-320px]'
                                style={{margin: '0'}}
                                    mode="range"
                                    defaultMonth={pastMonth}
                                    selected={range}
                                    // footer={footer}
                                    onSelect={setRange}
                                />
                            </div>
                            <input name="number" type="text" className="flex-1 block w-full py-2 sm:py-4 px-4 outline-0 min-w-[170px]" min={5} defaultValue="0150000000 " required />

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