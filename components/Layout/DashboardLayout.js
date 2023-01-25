import Head from "next/head";
import Navbar from "../Navbar";
import Footer from '../../components/Footer'
import Link from "next/link";

const DashboardLayout = ({ children }) => {
    return (
        <main>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <Navbar>Dashboard</Navbar>
            <section className='max-w-7xl mx-auto'>
                <aside className='bg-[#ccc] h-screen w-[300px] p-5 relative'>
                    <i class="fa-solid fa-angle-right bg-white border-[1px] border-[black] px-2 py-1 text-sm rounded-full absolute right-[-12px] top-[15px] rotate-180 cursor-pointer"></i>
                    <div>
                        <Link className='text-xl mt-[30px] inline-block grid grid-cols-8' href=''> <i class="fa-solid fa-user self-center"></i> <span className='col-start-2 col-end-9'>Profile</span></Link>
                    </div>
                    <div>
                        <Link className='text-xl mt-[30px] inline-block grid grid-cols-8' href=''> <i class="fa-solid fa-plus self-center"></i> <span className='col-start-2 col-end-9'>Add Car</span></Link>
                    </div>
                    <div>
                        <Link className='text-xl mt-[30px] inline-block grid grid-cols-8' href=''> <i class="fa-solid fa-user-group self-center"></i> <span className='col-start-2 col-end-9'>Make Admin</span></Link>
                    </div>
                    <div>
                        <Link className='text-xl mt-[30px] inline-block grid grid-cols-8' href=''> <i class="fa-solid fa-car self-center"></i> <span className='col-start-2 col-end-9'>Manage Cars</span></Link>
                    </div>
                    <div>
                        <Link className='text-xl mt-[30px] inline-block grid grid-cols-8' href=''> <i class="fa-brands fa-first-order self-center"></i>< span>Manage Orders</span></Link>
                    </div>
                    <div>
                        <Link className='text-xl mt-[30px] inline-block grid grid-cols-8' href=''> <i class="fa-brands fa-first-order-alt self-center"></i> <span className='col-start-2 col-end-9'>My Orders</span></Link>
                    </div>
                    <div>
                        <Link className='text-xl mt-[30px] inline-block grid grid-cols-8' href=''> <i class="fa-solid fa-comment self-center"></i> <span className='col-start-2 col-end-9'>Add Review</span></Link>
                    </div>
                    <div>
                        <Link className='text-xl mt-[30px] inline-block grid grid-cols-8' href=''> <i class="fa-solid fa-handshake self-center"></i> <span className='col-start-2 col-end-9'>Car's Propos</span></Link>
                    </div>
                    
                </aside>
                <aside>
                    {children}
                </aside>
            </section>
            <Footer />
        </main>
    );
};

export default DashboardLayout;