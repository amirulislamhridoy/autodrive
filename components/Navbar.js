import { useState } from "react";
import Link from 'next/link'
import { useRouter } from "next/router";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = ({ children }) => {
    const router = useRouter()
    const [toggle, setToggle] = useState(false)
    const [user, loading, error] = useAuthState(auth);
    
    const logoutFn = () => {
        signOut(auth);
        router.push('/login')
    }
    return (
        <header className={`${children && 'bg-[#bbbbbb]'} z-50`}>
            <nav className=" max-w-7xl mx-auto border-gray-200 px-2 sm:px-4 py-2.5">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <Link href="/" className="flex items-center">
                        <img src="https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/2021/12/logo-autodrive.png" className="h-6 mr-3 sm:h-9" alt="autodrive logo"></img>
                    </Link>
                    <div className="flex lg:order-2">
                        {user?.email ? <button type="button" onClick={logoutFn} className="font-bold bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium px-3 sm:px-5 py sm:py-2 text-center text-xs mr-3 lg:mr-0 dark:bg-blue-600 dark:focus:ring-blue-800 hover:scale-110 duration-300">LOG OUT</button> : <button type="button" onClick={() => router.push('/login')} className="font-bold bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium px-3 sm:px-5 sm:py-2 text-center text-xs mr-3 lg:mr-0 dark:bg-blue-600 dark:focus:ring-blue-800 hover:scale-110 duration-300">LOGIN</button>}
                        <button onClick={() => setToggle(!toggle)} data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-1 sm:p-2 text-sm rounded lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 text-white hover:text-black dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className={`lg:flex items-center justify-between w-full lg:w-auto lg:order-1 ${toggle ? 'block' : 'hidden'}`} id="navbar-cta">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:font-medium lg:border-0 bg-white lg:bg-inherit">
                            <li>
                                <Link href="/" className={`text-sm font-bold hover:text-[#ffc947] lg:text-white block py-2 pl-3 pr-4 rounded lg:p-0 ${router.route ==='/' && 'border-b-2'}`} aria-current="page">HOME</Link>
                            </li>
                            <li>
                                <Link href="/services" className={`text-sm font-bold hover:text-[#ffc947] lg:text-white block py-2 pl-3 pr-4 rounded lg:p-0 ${router.route ==='/services' && 'border-b-2'}`} aria-current="page">SERVICES</Link>
                            </li>
                            <li>
                                <Link href="/about" className={`text-sm font-bold hover:text-[#ffc947] lg:text-white block py-2 pl-3 pr-4 rounded lg:p-0 ${router.route ==='/about' && 'border-b-2'}`} aria-current="page">ABOUT</Link>
                            </li>
                            <li>
                                <Link href="/contact" className={`text-sm font-bold hover:text-[#ffc947] lg:text-white block py-2 pl-3 pr-4 rounded lg:p-0 ${router.route ==='/contact' && 'border-b-2'}`} aria-current="page">CONTACT</Link>
                            </li>
                            <li>
                                <Link href="/blogs" className={`text-sm font-bold hover:text-[#ffc947] lg:text-white block py-2 pl-3 pr-4 rounded lg:p-0 ${router.route ==='/blogs' && 'border-b-2'}`} aria-current="page">BLOGS</Link>
                            </li>
                            <li>
                                <Link href="/locations" className={`text-sm font-bold hover:text-[#ffc947] lg:text-white block py-2 pl-3 pr-4 rounded lg:p-0 ${router.route ==='/locations' && 'border-b-2'}`} aria-current="page">LOCATIONS</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;