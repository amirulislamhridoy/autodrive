import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import Head from "next/head";
import Navbar from "../../components/Navbar";
import CarShortData from '../../components/Car/CarShortData';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';

const AllCarData = () => {
    const router = useRouter()
    const [user, loading] = useAuthState(auth);
    const { isLoading, error, data: cars } = useQuery('repoData', () =>
        // if I want to use dependence this time will be (useQuery(['repoData', dependence items],.....))
        fetch('https://autodrive-server.vercel.app/car/getAll').then(res =>
            res.json()
        )
    )
    if(isLoading || loading){
        return <Loading />
    }
    if(!user){
        router.push('/login')
    }
    return (
        <main>
            <Head>
                <title>All Car Data</title>
            </Head>
            <Navbar>All Car Data</Navbar>
            <section className='bg-[#f4f6fa]'>
                <div className='max-w-7xl mx-auto pt-20 pb-5'>
                    <h1 className='text-xl sm:text-3xl lg:text-4xl xl:text-5xl text-center font-bold'>WE OFFER BEST CAR</h1>
                    <p className='text-center mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div className='mx-3 lg:mx-1 lg:grid grid-cols-2 gap-4 mt-8'>
                        {cars?.map((car, i) => <CarShortData key={i} car={car}></CarShortData>)}
                    </div>
                    <div className='mt-5 text-center'><Link href='/' as='' className='text-2xl border-b-2 border-[#ffc947] text-[#474FA0] hover:border-[#474FA0] pb-2'>Back to home page &gt;</Link></div>
                </div>
            </section>
            <Footer></Footer>
        </main>
    );
};

export default AllCarData;
