import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import { DayPicker } from 'react-day-picker';
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import axios from "axios";
import 'react-day-picker/dist/style.css';
import Loading from '../../../components/Loading';
import Link from "next/link";

const Index = () => {
    const router = useRouter()
    const { id } = router.query
    const [locations, setLocations] = useState([])
    const [car, setCar] = useState({})
    const [range, setRange] = useState()
    const pastMonth = new Date()
    const [user, loading, error] = useAuthState(auth);
    const email = user?.email
    const name = user?.name

    useEffect(() => {
        if (id && email) {
            axios.get(`http://localhost:5000/car/getCar/${id}?email=${email}`, {
                headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
            }).then(res => setCar(res.data)).catch(err => {
                if ((err?.response?.status === 401) || (err?.response?.status === 404)) {
                    toast.error(err.response.data)
                    signOut(auth);
                    router.push('/login')
                    localStorage.removeItem('token')
                }
            })
        }
    }, [id, email])
    useEffect(() => {
        axios.get('http://localhost:5000/location/getAll')
            .then(function (response) {
                setLocations(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    if(loading){
        return <Loading />
    }
    const fromSubmit = (e) => {
        e.preventDefault()
        if(!user){
            router.push('/login')
            return toast.error("First you should login in this website.")
        }
        const location = e.target.location.value
        const date = e.target.date.value
        const number = e.target.number.value
        if (location === 'Pick Us Location') {
            return toast.error('Please select location')
        } else if(date === 'Date'){
            return toast.error('Please select date')
        }else if(number === '0150000000'){
            return toast.error('Please write your phone number')
        }
        let fromDate = date.split(' - ')[0]
        let toDate = date.split(' - ')[1]
        if((fromDate === toDate) || !toDate){
            toDate = ''
        }
        const data = {email: user?.email, location, carName: car?.name, fromDate: fromDate, toDate, number}
        
        axios.post('http://localhost:5000/booking/add', data)
          .then(function (response) {
            if((response.status === 200) && response.data){
                toast.success(response.data)
                e.target.number.value = '0150000000'
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <main>
            <Head><title>Booking</title></Head>
            <Navbar>Booking</Navbar>
            <section className='max-w-7xl mx-1 xl:mx-auto mb-10 '>
                <div className='sm:flex justify-between items-center gap-x-3'>
                    <h2 className='my-4 sm:my-44 xl:my-52'><span className='text-xl md:text-2xl'>Hello {name || email},</span> <br /> <span>Are you want to booking {car?.name}?</span></h2>
                    <div className='hidden sm:block bg-gray-300 px-1 py-[10%]'></div>
                    <div><img src={car.img} alt='car'></img></div>
                </div>
                <form onSubmit={fromSubmit} className='flex gap-x-2 gap-y-1 flex-wrap'>
                    <select name='location' className="flex-1 form-select form-select-lg block w-full px-4 py-2 font-normal bg-white bg-clip-padding bg-no-repeat transition ease-in-out m-0 focus:outline-none min-w-[170px] border-2" aria-label=".form-select-lg example">
                        <option className='hidden' defaultValue>Pick Us Location</option>
                        {locations?.map(location => <option key={location._id} vlaue={location.name}>{location.name}</option>)}
                    </select>
                    <div className='flex-1 min-w-[170px] relative group'>
                        {/* <input name='date' type='text' value={`${range?.from ? format(range?.from, 'PPP'): 'Date'}${range?.to ? `-${format(range?.from, 'PPP')}`: ""}`} className="block w-full py-2 sm:py-4 px-4 outline-0" placeholder="Date" required /> */}
                        <input name='date' type='text' value={`${range?.from ? (range?.from?.getDate() + '/' + range?.from?.getMonth() + "/" + range?.from?.getFullYear()) : 'Date'}${range?.to ? (" - " + range?.to?.getDate() + '/' + range?.to?.getMonth() + "/" + range?.to?.getFullYear()) : ""}`} className="block w-full py-2 sm:py-4 px-4 border-2 outline-0" placeholder="Date" required />
                        <DayPicker
                            className='Day-Picker group-hover:block hidden absolute bg-white sm:p-5 rounded-xl rounded-br-none right-0 lg:right-auto lg:left-0 lg:rounded-bl-none shadow-xl overflow-x-auto whitespace-nowrap top-[-232px] sm:top-[-320px]'
                            style={{ margin: '0' }}
                            mode="range"
                            disabled={[{ before: new Date() }, new Date()]}
                            defaultMonth={pastMonth}
                            selected={range}
                            onSelect={setRange}
                        />
                    </div>
                    <input name="number" type="text" className="flex-1 block w-full py-2 sm:py-4 px-4 outline-0 min-w-[170px] border-2" min={5} defaultValue="0150000000 " required />

                    <button className='flex-1 bg-[#ffc947] min-w-[170px] py-2 sm:py-4'>
                        BOOK NOW
                    </button>
                </form>
                <div className='mt-10 text-center'>
                    You can see you all booking cars. <Link href='/dashboard' className='border-b-2 border-[#0000EE] hover:border-[#dddddd]'>Click</Link>
                </div>
            </section>
            <Footer></Footer>
        </main>
    );
};

export default Index;