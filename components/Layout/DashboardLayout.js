import Head from "next/head";
import Navbar from "../Navbar";
import Footer from '../../components/Footer'
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const DashboardLayout = ({ children }) => {

    const router = useRouter()
    const [open, setOpen] = useState(true);
    return (
        <main>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <title>Dashboard</title>
            </Head>
            <Navbar>Dashboard</Navbar>
            <section className='max-w-7xl mx-auto flex overflow-hidden'>
                <div className={`${open ? "w-72" : "w-12 sm:w-20"} bg-dark-purple p-1 sm:p-5 pt-5 sm:pt-8 relative duration-300 bg-[#ccc] min-h-[70vh]`}>
                    <i onClick={() => setOpen(!open)} className={`fa-solid fa-angle-right absolute cursor-pointer -right-3 top-9 px-2 hover:bg-white border-black py-1 border-2 rounded-full  ${open && "rotate-180"}`}></i>
                    <div className="flex gap-x-4 items-center">
                        <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}>
                            Dashboard
                        </h1>
                    </div>
                    <div className="pt-4">
                        <Link href='/dashboard' className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 ${router.route === '/dashboard' && 'text-white'}`}>
                            <i className="text-xl fa-solid fa-user"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200 whitespace-nowrap`}>
                                Profile
                            </span>
                        </Link>
                        <Link href='/dashboard/addCar' className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 mt-2 ${router.route === '/dashboard/addCar' && 'text-white'}`}>
                            <i className="text-xl fa-solid fa-plus self-center"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200 whitespace-nowrap`}>
                                Add Car
                            </span>
                        </Link>
                        <Link href='/dashboard/makeAdmin' className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 mt-2 ${router.route === '/dashboard/makeAdmin' && 'text-white'}`}>
                            <i className="fa-solid fa-user-group self-center"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200 whitespace-nowrap`}>
                                Make Admin
                            </span>
                        </Link>
                        <Link href='/dashboard/manageCars' className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 mt-2 ${router.route === '/dashboard/manageCars' && 'text-white'}`}>
                            <i className="fa-solid fa-car self-center"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200 whitespace-nowrap`}>
                                Manage Cars
                            </span>
                        </Link>
                        <Link href='/dashboard/manageBookings' className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 mt-2 ${router.route === '/dashboard/manageBookings' && 'text-white'}`}>
                            <i className="text-xl fa-brands fa-first-order self-center"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200 whitespace-nowrap`}>
                                Manage Bookings
                            </span>
                        </Link>
                        <Link href='/dashboard/myBookings' className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 mt-2 ${router.route === '/dashboard/myBookings' && 'text-white'}`}>
                            <i className="text-xl fa-brands fa-first-order-alt self-center"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200 whitespace-nowrap`}>
                                My Bookings
                            </span>
                        </Link>
                        <Link href='/dashboard/addReview' className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 mt-2 ${router.route === '/dashboard/addReview' && 'text-white'}`}>
                            <i className="text-xl fa-solid fa-comment self-center"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200 whitespace-nowrap`}>
                                Add Review
                            </span>
                        </Link>
                        <Link href='/dashboard/proposCar' className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 mt-2 ${router.route === '/dashboard/proposCar' && 'text-white'}`}>
                            <i className="text-xl fa-solid fa-handshake self-center"></i>
                            <span className={`${!open && "hidden"} origin-left duration-200 whitespace-nowrap`}>
                                Car&apos;s Propos
                            </span>
                        </Link>
                    </div>
                </div>
                <aside className='ml-8 mt-10 overflow-x-auto'>
                    {children}
                </aside>
            </section>
            <Footer />
        </main>
    );
};

export default DashboardLayout;