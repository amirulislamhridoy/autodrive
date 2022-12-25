import Link from "next/link";

const Footer = () => {
    // <i class="fa-brands fa-facebook-f"></i>
    // <i class="fa-brands fa-twitter"></i>
    // <i class="fa-brands fa-youtube"></i>
    // <i class="fa-brands fa-instagram"></i>
    return (
        <footer className='bg-[#f4f6fa] pt-14'>
            <div className='mx-auto max-w-7xl '>
                <div className='flex justify-between'>
                    <div className='max-w-[300px]'>
                        <img className='mb-7' src='https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/2021/12/logo-autodrive-dark.png'></img>
                        <p className='text-[#545e70]'>Venenatis quam diam nisi id viverra dui proin quisque. ridicul netus faucib venen atis quam diam nisi id viverra dui</p>
                    </div>
                    <div>
                        <h4 className='text-xl font-bold mb-7'>FOLLOW US</h4>
                        <div>
                            <Link href=''><i class="bg-[#ffc947] mr-2 p-2 rounded-full fa-brands fa-facebook"></i></Link>
                            <Link href=''><i class="bg-[#ffc947] mx-2 p-2 rounded-full fa-brands fa-twitter"></i></Link>
                            <Link href=''><i class="bg-[#ffc947] mx-2 p-2 rounded-full fa-brands fa-youtube"></i></Link>
                            <Link href=''><i class="bg-[#ffc947] mx-2 p-2 rounded-full fa-brands fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
                <hr className='my-7'></hr>
                <div className='flex justify-between'>
                    <ul>
                        <h4 className='text-xl font-bold mb-7'>CONTACT US</h4>
                        <p className='text-[#545e70]'>021 Hollywood Bulevard, LA <br /> customer@example.com <br /> +8801500000</p>
                    </ul>
                    <ul>
                        <h4 className='text-xl font-bold mb-7'>SERVICES</h4>
                        <li className='text-[#545e70] hover:text-black my-1'><Link href=''>Supercar Rental</Link></li>
                        <li className='text-[#545e70] hover:text-black my-1'><Link href=''>Luxuary Rental</Link></li>
                        <li className='text-[#545e70] hover:text-black my-1'><Link href=''>Chauffeur Services</Link></li>
                        <li className='text-[#545e70] hover:text-black my-1'><Link href=''>Book Online</Link></li>
                    </ul>
                    <ul>
                        <h4 className='text-xl font-bold mb-7'>QUICK MENU</h4>
                        <li className='text-[#545e70] hover:text-black my-1'><Link href=''>About</Link></li>
                        <li className='text-[#545e70] hover:text-black my-1'><Link href=''>Services</Link></li>
                        <li className='text-[#545e70] hover:text-black my-1'><Link href=''>Location</Link></li>
                        <li className='text-[#545e70] hover:text-black my-1'><Link href=''>Fleet</Link></li>
                    </ul>
                    <ul>
                        <h4 className='text-xl font-bold mb-7'>CUSTOMER SERVICES</h4>
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