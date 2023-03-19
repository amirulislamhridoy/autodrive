import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import Head from "next/head";
import Navbar from "../../components/Navbar";
import CarShortData from '../../components/Car/CarShortData';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCar } from '../../app/features/toolkit/carSlice';

const AllCarData = () => {
    const router = useRouter()
    const [user, userLoading] = useAuthState(auth);
    const [click, setClick] = useState(false)

    const dispatch = useDispatch()
    const {cars} = useSelector(state => state)
    const { loading, data, error, pages } = cars
    const [name, setName] = useState(data.name || '')
    const [page, setPage] = useState(data.page || 0)
    const [limit, setLimit] = useState(data.limit || 10)

    useEffect(() => {
        dispatch(fetchCar({ limit, page, name }))
    }, [limit, name, page])

    const pageChangeFn = (type) => {
        if (type === 'next') {
            if ((page + 1) === pages) {
                setPage(0)
            } else {
                setPage(page + 1)
            }
        } else {
            if (page === 0) {
                setPage(pages - 1)
            } else {
                setPage(page - 1)
            }
        }
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setClick(!click)
        }
    };
    if (userLoading || loading) {
        return <Loading />
    }
    if (!user) {
        router.push('/login')
    }
    return (
        <main className='bg-[#f4f6fa]'>
            <Head>
                <title>All Car Data</title>
            </Head>
            <Navbar>All Car Data</Navbar>
            <section>
                <nav className='h-14 bg-[rgba(255,201,71,.3)] rounded-full m-2 max-w-7xl mx-auto px-5'>
                    <ul className='h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900'>
                        <h1>Autodrive Cars</h1>

                        <li className='flex bg-white ml-auto h-8 w-full max-w-lg  rounded-full pr-3'>
                            <input
                                className='h-8 rounded-full w-full text-sm border-0 focus:ring-0 outline-none mx-5'
                                type='text'
                                name='search'
                                id='search'
                                onChange={e => setName(e.target.value)}
                                value={name}
                                onKeyDown={handleKeyDown}
                            />
                            <button onClick={() => setClick(!click)}>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </li>
                    </ul>
                </nav>
            </section>
            <section>
                <div className='max-w-7xl mx-auto pt-10 pb-5'>
                    <h1 className='text-xl sm:text-3xl lg:text-4xl xl:text-5xl text-center font-bold'>WE OFFER BEST CAR</h1>
                    <p className='text-center mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div className='mx-3 lg:mx-1 lg:grid grid-cols-2 gap-4 mt-8'>
                        {data.cars?.map((car, i) => <CarShortData key={i} car={car}></CarShortData>)}
                    </div>
                    <div className='mt-5 text-center'><Link href='/' as='' className='text-2xl border-b-2 border-[#ffc947] text-[#474FA0] hover:border-[#474FA0] pb-2'>Back to home page &gt;</Link></div>
                </div>
            </section>
            <section className='mx-auto max-w-7xl flex justify-end gap-x-2'>
                <div className='flex'>
                    <button onClick={() => pageChangeFn('previous')} className='border px-2 pl-4 hover:bg-[#ffc947] rounded-tl-full rounded-bl-full'>Previous</button>
                    {[...Array(pages).keys()].map((p, i) => <button key={i} onClick={() => setPage(p)} className={`border px-2 ${page === p ? 'bg-[#ffc947] cursor-default' : 'hover:bg-[#ffc947]'}`}>{p + 1}</button>)}
                    <button onClick={() => pageChangeFn('next')} className='border px-2 pr-4 hover:bg-[#ffc947] rounded-tr-full rounded-br-full'>Next</button>
                </div>
                <select value={limit} onChange={(e) => setLimit(e.target.value)} className='border py-1 px-2'>
                    <option>10</option>
                    <option>6</option>
                </select>
            </section>
            <Footer></Footer>
        </main>
    );
};

export default AllCarData;
