import Navbar from "../Navbar";

const Banner = () => {
    return (
        <section className='bg-cover bg-fixed bg-center bg-no-repeat bg-no-repeat min-h-screen' style={{ backgroundImage: ` linear-gradient(rgba(10, 25, 49, 0.5), rgba(10, 25, 49, 0.7)), url('https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/2021/12/hero-home.jpg')` }}>
            <Navbar></Navbar>
            
            <div className='max-w-7xl mx-auto'>
                <h1>Hire The Best Car At The Best Price</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div class=''>
                    <h3>BOOK YOUR CAR</h3>
                    <div className='flex gap-x-2'>
                        <select class="flex-1 form-select form-select-lg block w-full px-4 py-2 font-normal bg-white bg-clip-padding bg-no-repeat transition ease-in-out m-0 focus:outline-none" aria-label=".form-select-lg example">
                            <option className='' selected>Pick-us Location</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select class="flex-1 form-select form-select-lg block w-full px-4 py-2 font-normal bg-white bg-clip-padding bg-no-repeat transition ease-in-out m-0 focus:outline-none" aria-label=".form-select-lg example">
                            <option selected>Choose a Car</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <input name="start" type="text" onFocus={(e) => e.target.type='date'} class="flex-1 block w-full py-2 px-4 outline-0" placeholder="Select Date" />
                        <input name="start" type="text" onFocus={(e) => e.target.type='date'} class="flex-1 block w-full py-2 px-4 outline-0" placeholder="End Date start" />

                        <button className='flex-1 bg-[#ffc947]'>
                            BOOK NOW
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;