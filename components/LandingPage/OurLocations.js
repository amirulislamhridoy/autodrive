import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useLocation from "../../hook/useLocation";

const OurLocations = () => {
    const [locations] = useLocation()
    return (
        <section className='max-w-7xl mx-auto bg-no-repeat bg-center bg-contain flex flex-col items-center my-20' style={{ backgroundImage: `url(${'https://worldmapwithcountries.net/wp-content/uploads/2020/07/Blank-Map-of-Bangladesh.gif'})` }}>
            <p className='text-lg font-semibold text-[#ffc947] mb-2'>LOCATIONS</p>
            <h2 className='text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-3'>OUR LOCATIONS</h2>
            <p className='mb-5 text-center mx-1 sm:mx-0'>Odio eu viverra tincidunt tristique ullamcorper blandit dipiscing nunc risus integer at elementum cursus. Lorem justo a felis elit amet.</p>
            <img src='https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/elementor/thumbs/car-loc-pi9o4h5phh24x6795bkmwifpss8wxrs2tnxtj7pgs0.png' alt=''></img>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                loop={true}
                loopFillGroupWithBlank={true}
                breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    550: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                  }}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                navigation={true}
                modules={[ Navigation, Autoplay]}
                className='mySwiper mt-8'
                style={{ maxWidth: '100%' }}
            >
                {locations?.map((location, i) => <SwiperSlide className='border p-5 pl-6 mb-4 drop-shadow-xl bg-white rounded-lg' key={i}>
                    <div className='flex items-center gap-x-2'>
                        <i className="fa-solid fa-location-dot text-[#ffc947] text-xl"></i>
                        <h3 className='text-2xl'>{location.name}</h3>
                    </div>
                    <p className='text-base'>{location.address}</p>
                    <p className='text-base'>{location.call}</p>
                </SwiperSlide>)}
            </Swiper>
        </section>
    );
};
export default OurLocations;
