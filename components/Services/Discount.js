import React from 'react';

const Discount = () => {
    return (
        <section className='h-[642px] mb-10' style={{ background: `linear-gradient(rgba(10, 25, 49, 0.5), rgba(10, 25, 49, 0.5)), url(${'https://kitnew.moxcreative.com/mobirentz/wp-content/uploads/sites/28/2022/12/at-a-car-dealership-buying-a-car-5.jpg'})`, backgroundPosition: 'top center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='max-w-7xl mx-auto p-4 flex items-center h-full text-white'>
                <div className='w-6/12'>
                    <p>PROMOTION</p>
                    <h1 className='text-5xl font-bold my-4'>Discount Up 30% Only <br /> First Month For New <br /> Member!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    {/* <button>Claim Promo</button> */}
                </div>
            </div>
        </section>
    );
};

export default Discount;