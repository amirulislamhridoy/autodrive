const Ranking = () => {
    return (
        <section className='mx-auto max-w-7xl flex justify-around text-white py-16' style={{background: `linear-gradient(rgba(10, 25, 49, 0.5), rgba(10, 25, 49, 0.7)), url('https://kitnew.moxcreative.com/mobirentz/wp-content/uploads/sites/28/2022/12/classic-cars.jpg')`, backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <div className='text-center'>
                <h1 className="text-5xl font-bold">68<span className='text-[#ffc947]'>+</span></h1>
                <p className=''>Brands of Car</p>
            </div>
            <div className='text-center'>
                <h1 className="text-5xl font-bold flex justify-center items-center">96<span className='text-[#ffc947] text-3xl'>%</span></h1>
                <p className=''>Happy Clients</p>
            </div>
            <div className='text-center'>
                <h1 className="text-5xl font-bold">10<span className='text-[#ffc947]'>+</span></h1>
                <p className=''>Locations</p>
            </div>
            <div className='text-center'>
                <h1 className="text-5xl font-bold">15<span className='text-[#ffc947]'>+</span></h1>
                <p className=''>Years of Experience</p>
            </div>
        </section>
    );
};

export default Ranking;