import React from 'react';

const AboutContent = () => {
    return (
        <section className='max-w-7xl mx-2 xl:mx-auto mt-10 md:mt-20'>
            <div className='md:flex gap-x-10 items-center'>
                <div>
                    <p className='text-[#bbbbbb] text-md sm:text-xl font-bold'>ABOUT US</p>
                    <h2 className='text-2xl font-bold sm:text-4xl sm:mt-2 md:mt-4'>ABOUT AUTODRIVE</h2>
                    <article className='mt-1 sm:mt-4 md:mt-8 text-justify'>
                        Venenatis quam diam nisi id viverra dui proin quisque. Ridicul netus faucibus. Venenatis quam diam nisi id viverra dui proin quisque. Ridiculus adipiscing massa at amet, mi at auctor. Donec vestibulum quis morbi sit non feugiat justo, sagittis. Erat amet id netus faucibus.
                        <br />
                        <br />
                        Quam diam nisi id viverra dui proin quisque. Ridiculus adipiscing feugiat justo, sagittis. Erat amet id netus faucibus
                    </article>
                </div>
                <div className='mt-10 md:mt-0'>
                    <img className='w-full' decoding="async" src="https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/elementor/thumbs/about-sect2-pibdgmmbnjp4n2uyoz0wdsalpq9opx47mxc31vyzeg.jpg" title="about-sect2" alt="about-sect2" />
                    <article className='text-justify mt-4'>
                        Venenatis quam diam nisi id viverra dui proin quisque. Ridicul netus faucibus. Venenatis quam diam nisi id viverra dui proin quisque. Ridiculus adipiscing massa at amet, mi at auctor. Donec vestibulum quis morbi sit non feugiat justo, sagittis. Erat amet id netus faucibus.
                    </article>
                </div>
            </div>
            <div className='mt-8 md:mt-14 lg:flex gap-x-6 xl:gap-x-12'>
                <img className='w-full max-h-[450px]' decoding="async" src="https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/elementor/thumbs/about-sect-pibde2i5gozsa780uqucux1dp9i78lu4pfqg89rr4m.jpg" title="about-sect" alt="about-sect" />
                <div className=' w-full px-6 sm:px-10 py-3 xl:px-16 sm:py-7 xl:py-10' style={{backgroundColor: '#FFC947' ,backgroundImage: `url('https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/2021/12/line-pattern.png')`}}>
                    <p className='font-bold text-[#185ADB]'>WHY</p>
                    <h2 className='text-xl sm:text-4xl font-bold mt-2'>WHY BOOK WITH AUTODRIVE?</h2>
                    <div className='mt-8'>
                        <div className='flex gap-x-4 items-center mt-2'>
                            <i className="sm:text-2xl text-white p-1 sm:p-3 bg-red-500 rounded-full fa-regular fa-money-bill-1"></i>
                            <div>
                                <h3 className='font-bold sm:text-xl'>ALL INCLUSIVE PRICING</h3>
                                <p className='mt-1'>Odio eu viverra tincidunt tristique</p>
                            </div>
                        </div>
                        <div className='flex gap-x-4 items-center mt-2'>
                            <i className="sm:text-2xl text-white p-1 sm:p-3 bg-red-500 rounded-full fa-solid fa-headset"></i>
                            <div>
                                <h3 className='font-bold sm:text-xl'>DEDICATED CUSTOMER SUPPORT</h3>
                                <p className='mt-1'>Odio eu viverra tincdunt trstique</p>
                            </div>
                        </div>
                        <div className='flex gap-x-4 items-center mt-2'>
                            <i className="sm:text-2xl text-white py-1 px-2 sm:py-3 sm:px-4 bg-red-500 rounded-full fa-solid fa-dollar-sign"></i>
                            <div>
                                <h3 className='font-bold sm:text-xl'>LOWSET PRICE GUARANTEE</h3>
                                <p className='mt-1'>Odio eu viverra tincdunt trstique</p>
                            </div>
                        </div>
                        <div className='flex gap-x-4 items-center mt-2'>
                            <i className="sm:text-2xl text-white p-1 sm:p-3 bg-red-500 rounded-full fa-solid fa-check-double"></i>
                            <div>
                                <h3 className='font-bold sm:text-xl'>FREE CANCELLATION</h3>
                                <p className='mt-1'>Odio eu viverra tincdunt trstique</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutContent;