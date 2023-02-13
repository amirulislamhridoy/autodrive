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
    const [carFullData, setCarFullData] = useState({})
    const [range, setRange] = useState()
    const pastMonth = new Date()
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        axios.get('https://autodrive-server.vercel.app/car/getAll')
            .then(function (response) {
                setCars(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    useEffect(() => {
        axios.get('https://autodrive-server.vercel.app/location/getAll')
            .then(function (response) {
                setLocations(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    const fromSubmit = (e) => {
        e.preventDefault()
        if (!user) {
            router.push('/login')
            return toast.error("First you should login in this website.")
        }
        const car = e.target.car.value
        const location = e.target.location.value
        const date = e.target.date.value
        const number = e.target.number.value
        if (location === 'Pick Us Location') {
            return toast.error('Please select location')
        } else if (date === 'Date') {
            return toast.error('Please select date')
        } else if (number.includes('0150000000')) {
            return toast.error('Please write your phone number')
        }
        let fromDate = date.split(' - ')[0]
        let toDate = date.split(' - ')[1]
        if ((fromDate === toDate) || !toDate) {
            toDate = ''
        }
        const data = { email: user?.email, location, carName: car, fromDate: fromDate, toDate, number, carId: carFullData._id, perDay: carFullData.dayHire }
        axios.post(`http://localhost:5000/booking/add?email=${user?.email}`, data)
            .then(res => {
                if (res.status === 200 && res?.data) {
                    toast(res.data)
                    e.target.reset()
                    e.target.number.value = '0150000000'
                }
            })
            .catch(e => {
                console.log('error', e)
            })
    }
    return (
        <section className='bg-cover bg-fixed bg-center bg-no-repeat bg-no-repeat min-h-screen' style={{ backgroundImage: ` linear-gradient(rgba(10, 25, 49, 0.5), rgba(10, 25, 49, 0.7)), url('https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/2021/12/hero-home.jpg')` }}>
            <Navbar></Navbar>
            <div className='max-w-7xl mx-auto flex flex-col justify-end' style={{ minHeight: `calc(100vh - 130px` }}>
                <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center md:mb-5'>Hire The Best Car At <br /> The Best Price</h1>
                <p className='text-white text-center mx-1 sm:mx-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                <div className='mt-8 lg:mt-10 xl:mt-14 xl:mx-0 mx-2'>
                    <h3 className='text-white font-bold my-4'>BOOK YOUR CAR</h3>
                    <div className='p-7 bg-[#0a1931]'>
                        <form onSubmit={fromSubmit} className='flex gap-x-2 gap-y-1 flex-wrap'>
                            <select name='location' className="flex-1 form-select form-select-lg block w-full px-4 py-2 font-normal bg-white bg-clip-padding bg-no-repeat transition ease-in-out m-0 focus:outline-none min-w-[170px]" aria-label=".form-select-lg example">
                                <option className='hidden' >Pick Us Location</option>
                                {locations?.map(location => <option key={location._id} vlaue={location.name}>{location.name}</option>)}
                            </select>

                            <select name='car' onChange={e => setCarFullData(cars.find(car => (`${car.name}${car?.model ? (` ${car?.model}`) : ''}`) === e.target.value))} className="flex-1 form-select form-select-lg block w-full px-4 py-2 font-normal bg-white bg-clip-padding bg-no-repeat transition ease-in-out m-0 focus:outline-none min-w-[170px]" aria-label=".form-select-lg example">
                                <option className='hidden'>Car Name</option>
                                {cars?.map(car => <option key={car._id} vlaue={car.name}>{car.name}{car?.model && (car?.model ? ` ${car?.model}` : '')}</option>)}
                            </select>
                            {/* type="text" onFocus={(e) => e.target.type = 'date'} */}
                            <div className='flex-1 min-w-[170px] relative group'>
                                {/* <input name='date' type='text' value={`${range?.from ? format(range?.from, 'PPP'): 'Date'}${range?.to ? `-${format(range?.from, 'PPP')}`: ""}`} className="block w-full py-2 sm:py-4 px-4 outline-0" placeholder="Date" required /> */}
                                <input name='date' type='text' defaultValue='Date' value={`${range?.from ? (range?.from?.getDate() + '/' + range?.from?.getMonth() + "/" + range?.from?.getFullYear()) : 'Date'}${range?.to ? (" - " + range?.to?.getDate() + '/' + range?.to?.getMonth() + "/" + range?.to?.getFullYear()) : ""}`} className="block w-full py-2 sm:py-4 px-4 outline-0 " placeholder="Date" required />
                                <DayPicker
                                    className='Day-Picker group-hover:block hidden absolute bg-white sm:p-5 rounded-xl rounded-br-none right-0 lg:right-auto lg:left-0 lg:rounded-bl-none shadow-xl overflow-x-auto whitespace-nowrap top-[-232px] sm:top-[-320px]'
                                    style={{ margin: '0' }}
                                    mode="range"
                                    disabled={[{ before: new Date() }, new Date()]}
                                    defaultMonth={pastMonth}
                                    selected={range}
                                    // footer={footer}
                                    onSelect={setRange}
                                />
                            </div>
                            <input name="number" type="text" className="flex-1 block w-full py-2 sm:py-4 px-4 outline-0 min-w-[170px]" min={5} defaultValue="0150000000" required />

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

export const getServerSideProps = async () => {
    axios.get('https://autodrive-server.vercel.app/car/getAll')
        .then(function (response) {
            setCars(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
}

export default Banner;