import Navbar from "../components/Navbar";
import Head from "next/head";
import { useState } from "react";
import Link from "next/link";

const Login = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <section>
            <Head><title>Login</title></Head>
            <Navbar>login</Navbar>

            <div className='mx-1 xl:mx-auto max-w-7xl flex justify-center lg:justify-between items-center mt-4 sm:mt-8 lg:mt-14 xl:mt-20 2xl:mt-32 mb-3'>
                <div className='mg:w-6/12 xl:w-5/12 p-4 md:p-7 md:pt-10 border rounded-lg'>
                    <img className='bg-[#bbbbbb] mb-4' src='https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/2021/12/logo-autodrive.png' alt=''></img>
                    <h2 className='text-2xl font-semibold mb-2.5'>Welcome back</h2>
                    <p className='text-sm text-[#aaaaaa]'>Start your website in seconds. Don&apos;t have an account? <Link className='text-[#2c63ec] font-semibold' href='http://localhost:3000/signup' alt=''>Sign up</Link></p>
                    <form className='mt-4 lg:mt-6'>
                        <div className='lg:flex justify-between'>
                            <div>
                                <label className='' htmlFor="email">Email</label>
                                <br />
                                <input id='email' className='lg:mt-2 px-3 py-2 border border-2 rounded-lg w-full' type='email' placeholder='user@example.com' required></input>
                            </div>
                            <div className='mt-2 lg:mt-0'>
                                <label className='' htmlFor="password" required>Password</label>
                                <br />
                                <input id='password' className='lg:mt-2 px-3 py-2 border border-2 rounded-lg w-full' type='password' placeholder="******"></input>
                            </div>
                        </div>
                        <div className='flex my-6 justify-center items-center gap-x-5'>
                            <hr className='w-full'></hr>
                            <span>or</span>
                            <hr className='w-full'></hr>
                        </div>
                        <button className='w-full border rounded-lg flex px-3 py-2 hover:bg-gray-100'><img className='w-5' src='https://freesvg.org/img/1534129544.png' alt=''></img><span className='flex-1'>Sign in with Google</span></button>
                        <button className='w-full border rounded-lg flex px-3 py-2 hover:bg-gray-100 mt-5'><img className='w-5' src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt=''></img><span className='flex-1'>Sign in with Github</span></button>
                        <div className="flex justify-between my-6">
                            <div className=''>
                                <input id='check' onChange={(e) => setToggle(e.target.checked)} className='mr-2' type='checkbox'></input>
                                <label htmlFor='check'>Remember me</label>
                            </div>
                            <Link className='text-[#2c63ec] font-semibold' href=''>Forgot password?</Link>
                        </div>
                        <button type='submit' disabled={!toggle} className={`w-full border rounded-lg py-2 ${toggle ? 'bg-[#2c63ec] text-white': " text-gray-400" }`}>Login in to your account</button>
                    </form>
                </div>
                <div className='hidden lg:block'>
                    <img className="w-full" src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg' alt=''></img>
                </div>
            </div>
        </section>
    );
};

export default Login;
// test