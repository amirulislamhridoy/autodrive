import Head from "next/head";
import Navbar from "../Navbar";
import Footer from '../../components/Footer'
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const DashboardLayout = ({ children }) => {
    const [toggle, setToggle] = useState(false)
    console.log(toggle)
    const router = useRouter()
    return (
        <main>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <title>Dashboard</title>
            </Head>
            <Navbar>Dashboard</Navbar>
            <section className='max-w-7xl mx-auto flex overflow-hidden'>
                <aside className={`bg-[#ccc] lg:p-5 pl-2 pr-4 sm:px-4 lg:pl-10 pb-10 min-h-[50vh] relative duration-300 ${toggle ? 'w-[45px] sm:w-[50px] md:w-[60px] lg:w-[100px]': 'md:w-[300px] min-w-[150px]'}`}>
                    <i onClick={() => setToggle(!toggle)} className={`fa-solid fa-angle-right bg-white border-[1px] border-[black] px-[4px] py-[2px] sm:px-2 p sm:py-1 text-[10px] sm:text-sm rounded-full absolute right-[-7px] sm:right-[-12px] top-[5px] md:top-[10px] lg:top-[15px] cursor-pointer duration-300 ${!toggle && 'rotate-180'}`}></i>
                    <div>
                        <Link className={`text-sm md:text-xl mt-[10px] sm:mt-[20px] lg:mt-[30px] inline-block grid grid-cols-8 ${router.route === '/dashboard' && 'text-white'}`} href='/dashboard'> <i className="fa-solid fa-user self-center"></i> <span className={`col-start-3 col-end-9 md:col-start-2 md:col-end-9 duration-300 ml-2 ${toggle && 'hidden'}`}>Profile</span></Link>
                    </div>
                    <div>
                        <Link className={`text-sm md:text-xl mt-[5px] sm:mt-[10px] md:mt-[20px] lg:mt-[30px] inline-block grid grid-cols-8 ${router?.route === '/dashboard/addCar' && 'text-white'}`} href='/dashboard/addCar'> <i className="fa-solid fa-plus self-center"></i> <span className={`col-start-3 col-end-9 md:col-start-2 md:col-end-9 duration-300 ml-2 ${toggle && 'hidden'}`}>Add Car</span></Link>
                    </div>
                    <div>
                        <Link className={`text-sm md:text-xl mt-[5px] sm:mt-[10px] md:mt-[20px] lg:mt-[30px] inline-block grid grid-cols-8 ${router?.route === '/dashboard/makeAdmin' && 'text-white'}`} href='/dashboard/makeAdmin'> <i className="fa-solid fa-user-group self-center"></i> <span className={`col-start-3 col-end-9 md:col-start-2 md:col-end-9 duration-300 ml-2 ${toggle && 'hidden'}`}>Make Admin</span></Link>
                    </div>
                    <div>
                        <Link className={`text-sm md:text-xl mt-[5px] sm:mt-[10px] md:mt-[20px] lg:mt-[30px] inline-block grid grid-cols-8 ${router?.route === '/dashboard/mangeCars' && 'text-white'}`} href='/dashboard/mangeCars'> <i className="fa-solid fa-car self-center"></i> <span className={`col-start-3 col-end-9 md:col-start-2 md:col-end-9 duration-300 ml-2 ${toggle && 'hidden'}`}>Manage Cars</span></Link>
                    </div>
                    <div>
                        <Link className={`text-sm md:text-xl mt-[5px] sm:mt-[10px] md:mt-[20px] lg:mt-[30px] inline-block grid grid-cols-8 ${router?.route === '/dashboard/manageOrders' && 'text-white'}`} href='/dashboard/manageOrders'> <i className="fa-brands fa-first-order self-center"></i> <span className={`col-start-3 col-end-9 md:col-start-2 md:col-end-9 duration-300 ml-2 ${toggle && 'hidden'}`}>Manage Orders</span></Link>
                    </div>
                    <div>
                        <Link className={`text-sm md:text-xl mt-[5px] sm:mt-[10px] md:mt-[20px] lg:mt-[30px] inline-block grid grid-cols-8  ${router?.route === '/dashboard/myOrders' && 'text-white'}`} href='/dashboard/myOrders'> <i className="fa-brands fa-first-order-alt self-center"></i> <span className={`col-start-3 col-end-9 md:col-start-2 md:col-end-9 duration-300 ml-2 ${toggle && 'hidden'}`}>My Orders</span></Link>
                    </div>
                    <div>
                        <Link className={`text-sm md:text-xl mt-[5px] sm:mt-[10px] md:mt-[20px] lg:mt-[30px] inline-block grid grid-cols-8  ${router?.route === '/dashboard/addReview' && 'text-white'}`} href='/dashboard/addReview'> <i className="fa-solid fa-comment self-center"></i> <span className={`col-start-3 col-end-9 md:col-start-2 md:col-end-9 duration-300 ml-2 ${toggle && 'hidden'}`}>Add Review</span></Link>
                    </div>
                    <div>
                        <Link className={`text-sm md:text-xl mt-[5px] sm:mt-[10px] md:mt-[20px] lg:mt-[30px] inline-block grid grid-cols-8 ${router?.route === '/dashboard/proposCar' && 'text-white'}`} href='/dashboard/proposCar'> <i className="fa-solid fa-handshake self-center"></i> <span className={`col-start-3 col-end-9 md:col-start-2 md:col-end-9 duration-300 ml-2 ${toggle && 'hidden'}`}>Car&apos;s Propos</span></Link>
                    </div>
                    
                </aside>
                <aside className='ml-8 mt-10 overflow-x-auto'>
                    {children}
                </aside>
            </section>
            <Footer />
        </main>
    );
};

export default DashboardLayout;