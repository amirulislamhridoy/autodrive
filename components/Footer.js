import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className='bg-[#f4f6fa] pt-8 sm:pt-14 px-2 sm:px-0'>
            <div className='mx-1 xl:mx-auto max-w-7xl '>
                <div className='sm:flex justify-between'>
                    <div className='max-w-[300px]'>
                        <Image width='150' height='80' className='mb-2 sm:mb-7' src='https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/2021/12/logo-autodrive-dark.png'></Image>
                        <p className='text-[#545e70]'>Venenatis quam diam nisi id viverra dui proin quisque. ridicul netus faucib venen atis quam diam nisi id viverra dui</p>
                    </div>
                    <div className="mt-5 sm:mt-0">
                        <h4 className='sm:text-xl font-bold mb-2 sm:mb-7'>FOLLOW US</h4>
                        <div>
                            <Link className='mr-2 ' href=''><i className="bg-[#ffc947] p-2 rounded-full fa-brands fa-facebook"></i></Link>
                            <Link className='mx-2 ' href=''><i className="bg-[#ffc947] p-2 rounded-full fa-brands fa-twitter"></i></Link>
                            <Link className='mx-2 ' href=''><i className="bg-[#ffc947] p-2 rounded-full fa-brands fa-youtube"></i></Link>
                            <Link className='mx-2 ' href=''><i className="bg-[#ffc947] p-2 rounded-full fa-brands fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
                <hr className='my-7'></hr>
                <div className='md:flex justify-between'>
                    <ul>
                        <h4 className='sm:text-xl font-bold mb-1 md:mb-7 mt-4'>CONTACT US</h4>
                        <p className='text-[#545e70]'>021 Hollywood Bulevard, LA <br /> customer@example.com <br /> +8801500000</p>
                    </ul>
                    <ul>
                        <h4 className='sm:text-xl font-bold md:mb-7 mt-4'>SERVICES</h4>
                        <li className='text-[#545e70] hover:text-black my-1'><Link href=''>Supercar Rental</Link></li>
                        <li className='text-[#545e70] hover:text-black my-1'><Link href=''>Luxuary Rental</Link></li>
                        <li className='text-[#545e70] hover:text-black my-1'><Link href=''>Chauffeur Services</Link></li>
                        <li className='text-[#545e70] hover:text-black my-1'><Link href=''>Book Online</Link></li>
                    </ul>
                    <ul>
                        <h4 className='sm:text-xl font-bold md:mb-7 mt-4'>QUICK MENU</h4>
                        <li className='text-[#545e70] hover:text-black my-1'><Link href='/about'>About</Link></li>
                        <li className='text-[#545e70] hover:text-black my-1'><Link href='/services'>Services</Link></li>
                        <li className='text-[#545e70] hover:text-black my-1'><Link href='/locations'>Location</Link></li>
                        <li className='text-[#545e70] hover:text-black my-1'><Link href='/blogs'>Blogs</Link></li>
                        <li className='text-[#545e70] hover:text-black my-1'><Link href='/contact'>Contact Us</Link></li>
                    </ul>
                    <ul>
                        <h4 className='sm:text-xl font-bold md:mb-7 mt-4'>CUSTOMER SERVICES</h4>
                        <li className='text-[#545e70] hover:text-black my-1'><Link href=''>FAQ</Link></li>
                        <li className='text-[#545e70] hover:text-black my-1'><Link href=''>Rental Plicies</Link></li>
                        <li className='text-[#545e70] hover:text-black my-1'><Link href=''>Testimonials</Link></li>
                        <li className='text-[#545e70] hover:text-black my-1'><Link href=''>Accident Form</Link></li>
                        <li className='text-[#545e70] hover:text-black my-1'><Link href=''>Inquiry/Feedback</Link></li>
                    </ul>
                </div>
                    <hr className='mt-7'></hr>
                <p className='text-center py-4 text-sm'>@ 2021 Autodrive. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;