import useLocation from "../../hook/useLocation";
import Ranking from "../LandingPage/Ranking";

const AllLocation = () => {
    const [locations] = useLocation()
    return (
        <section>
            <div className='max-w-7xl mx-auto bg-no-repeat bg-center bg-contain flex flex-col items-center my-20'>
                <p className='text-lg font-semibold text-[#ffc947] mb-2'>LOCATIONS</p>
                <h2 className='text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-3'>OUR LOCATIONS</h2>
                <p className='mb-5 text-center mx-1 sm:mx-0'>Odio eu viverra tincidunt tristique ullamcorper blandit dipiscing nunc risus integer at elementum cursus. Lorem justo a felis elit amet.</p>
                <img src='https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/elementor/thumbs/car-loc-pi9o4h5phh24x6795bkmwifpss8wxrs2tnxtj7pgs0.png' alt=''></img>
                <div className='flex flex-wrap justify-center gap-x-4'>
                    {locations.map(location => <div key={location._id} className='border p-5 pl-6 mb-4 drop-shadow-xl bg-white rounded-lg'>
                        <div className='flex items-center gap-x-2'>
                            <i className="fa-solid fa-location-dot text-[#ffc947] text-xl"></i>
                            <h3 className='text-2xl'>{location.name}</h3>
                        </div>
                        <p className='text-base'>{location.address}</p>
                        <p className='text-base'>{location.call}</p>
                    </div>)}
                </div>
            </div>
            <Ranking></Ranking>
        </section>
    );
};

export default AllLocation;