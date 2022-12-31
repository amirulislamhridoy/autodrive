import React from 'react';

const ServicesContent = () => {
    return (
        <section className='max-w-7xl mx-auto flex gap-x-12 items-center mt-20 mb-24'>
            <div className='w-10/12'>
                <p className='text-[#bbbbbb] font-bold text-xl'>ABOUT SERVICE</p>
                <h1 className='text-4xl font-bold my-4'>The most reliable part of your holiday</h1>
                <article className='text-justify'>Velit pretium amet consectetuer placerat morbi interdum tempor magnis. Vehicula tempus hac porta penatibus posuere sociosqu sem mattis amet. Nunc ex semper faucibus at dui eget. Consequat tellus habitasse ad nunc commodo si lorem auctor nullam</article>
                <div className='mt-8 flex gap-x-5'>
                    <i className="text-2xl rounded-full py-4 px-4 bg-[#f6e8de]  fa-solid fa-phone"></i>
                    <div>
                        <h4 className='font-semibold'>Call Us For Your Next Ride</h4>
                        <h2 className='text-2xl font-bold'>(02) 323 23444</h2>
                    </div>
                </div>
            </div>
            <div className='w-6/12' style={{ position: 'relative' }}>
                <img className='w-full' src='https://kitnew.moxcreative.com/mobirentz/wp-content/uploads/sites/28/2022/12/at-a-car-dealership-buying-a-car-2.jpg' alt=''></img>
                {/* <div className='' style={{background: `url(${'https://kitnew.moxcreative.com/mobirentz/wp-content/uploads/sites/28/2022/12/Pattern.png'})`}}>a</div> */}
                <img className='max-w-[300px] absolute bottom-[-40px] right-[-40px] z-[-1]' src='https://kitnew.moxcreative.com/mobirentz/wp-content/uploads/sites/28/2022/12/Pattern.png' alt=''></img>
            </div>
        </section>
    );
};

export default ServicesContent;