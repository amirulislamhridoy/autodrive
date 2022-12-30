const HomeBooking = () => {
    return (
        <section className='bg-center bg-cover bg-no-repeat text-white' style={{ backgroundImage: `url(${'https://kitnew.moxcreative.com/mobirentz/wp-content/uploads/sites/28/2022/12/black-sedan-car-driving-bridge-road-e1670989974685.jpg'})` }}>
            <div className='bg-gradient-to-r from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.6)]'>
                <div className='py-20 max-w-7xl mx-1 sm:mx-auto'>
                    <h2 className='text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold'>Call Us Today For <br /> Booking Your Next Ride</h2>
                    <p className='font-light my-2 md:my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <button className='bg-[#ffc947] text-black px-4 md:px-6 py-1 md:py-2 rounded md:mt-3'>Contact Us</button>
                </div>
            </div>
        </section>
    );
};

export default HomeBooking;