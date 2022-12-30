import Navbar from "../Navbar";

const Banner = () => {
    return (
        <section className='bg-cover bg-fixed bg-center bg-no-repeat bg-no-repeat min-h-screen' style={{ backgroundImage: ` linear-gradient(rgba(10, 25, 49, 0.5), rgba(10, 25, 49, 0.7)), url('https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/2021/12/hero-home.jpg')` }}>
            <Navbar></Navbar>
            <div className='max-w-7xl mx-auto flex flex-col justify-end' style={{minHeight: `calc(100vh - 200px`}}>
                <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center md:mb-5'>Hire The Best Car At <br /> The Best Price</h1>
                <p className='text-white text-center mx-1 sm:mx-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                <div className='mt-8 lg:mt-10 xl:mt-14 xl:mx-0 mx-2'>
                    <h3 className='text-white font-bold my-4'>BOOK YOUR CAR</h3>
                    <div className='p-7 bg-[#0a1931]'>
                        <div className='flex gap-x-2 gap-y-1 flex-wrap'>
                            <select className="flex-1 form-select form-select-lg block w-full px-4 py-2 font-normal bg-white bg-clip-padding bg-no-repeat transition ease-in-out m-0 focus:outline-none min-w-[170px]" aria-label=".form-select-lg example">
                                <option className='' defaultValue>Pick-us Location</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <select className="flex-1 form-select form-select-lg block w-full px-4 py-2 font-normal bg-white bg-clip-padding bg-no-repeat transition ease-in-out m-0 focus:outline-none min-w-[170px]" aria-label=".form-select-lg example">
                                <option defaultValue>Choose a Car</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                            <input name="start" type="text" onFocus={(e) => e.target.type = 'date'} className="flex-1 block w-full py-2 sm:py-4 px-4 outline-0 min-w-[170px]" placeholder="Start Date" />
                            <input name="start" type="text" onFocus={(e) => e.target.type = 'date'} className="flex-1 block w-full py-2 sm:py-4 px-4 outline-0 min-w-[170px]" placeholder="End Date " />

                            <button className='flex-1 bg-[#ffc947] min-w-[170px] py-2 sm:py-4'>
                                BOOK NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;