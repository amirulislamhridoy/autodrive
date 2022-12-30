import React from 'react';

const AboutContent = () => {
    return (
        <section className='max-w-7xl mx-auto mt-20'>
            <div className='flex gap-x-10 items-center'>
                <div>
                    <p className='text-[#bbbbbb] text-xl font-bold'>ABOUT US</p>
                    <h2 className='text-4xl mt-4'>ABOUT AUTODRIVE</h2>
                    <article className='mt-8 text-justify'>
                        Venenatis quam diam nisi id viverra dui proin quisque. Ridicul netus faucibus. Venenatis quam diam nisi id viverra dui proin quisque. Ridiculus adipiscing massa at amet, mi at auctor. Donec vestibulum quis morbi sit non feugiat justo, sagittis. Erat amet id netus faucibus.
                        <br />
                        <br />
                        Quam diam nisi id viverra dui proin quisque. Ridiculus adipiscing feugiat justo, sagittis. Erat amet id netus faucibus
                    </article>
                </div>
                <div>
                    <img class='w-full' decoding="async" src="https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/elementor/thumbs/about-sect2-pibdgmmbnjp4n2uyoz0wdsalpq9opx47mxc31vyzeg.jpg" title="about-sect2" alt="about-sect2" />
                    <article className='text-justify mt-4'>
                        Venenatis quam diam nisi id viverra dui proin quisque. Ridicul netus faucibus. Venenatis quam diam nisi id viverra dui proin quisque. Ridiculus adipiscing massa at amet, mi at auctor. Donec vestibulum quis morbi sit non feugiat justo, sagittis. Erat amet id netus faucibus.
                    </article>
                </div>
            </div>
            <div className='mt-14 flex gap-x-12'>
                <img className='' decoding="async" src="https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/elementor/thumbs/about-sect-pibde2i5gozsa780uqucux1dp9i78lu4pfqg89rr4m.jpg" title="about-sect" alt="about-sect" />
                <div className=' w-full px-16 py-10' style={{backgroundColor: '#FFC947' ,backgroundImage: `url('https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/2021/12/line-pattern.png')`}}>
                    <p className='font-bold text-[#185ADB]'>WHY</p>
                    <h2 className='text-5xl font-bold mt-2'>WHY BOOK WITH AUTODRIVE?</h2>
                    <div className='mt-8'>
                        <div className='flex gap-x-4 items-center mt-2'>
                            <i class="text-2xl text-white p-3 bg-red-500 rounded-full fa-regular fa-money-bill-1"></i>
                            <div>
                                <h3 className='font-bold text-xl'>ALL INCLUSIVE PRICING</h3>
                                <p className='mt-1'>Odio eu viverra tincidunt tristique</p>
                            </div>
                        </div>
                        <div className='flex gap-x-4 items-center mt-2'>
                            <i class="text-2xl text-white p-3 bg-red-500 rounded-full fa-solid fa-headset"></i>
                            <div>
                                <h3 className='font-bold text-xl'>DEDICATED CUSTOMER SUPPORT</h3>
                                <p className='mt-1'>Odio eu viverra tincdunt trstique</p>
                            </div>
                        </div>
                        <div className='flex gap-x-4 items-center mt-2'>
                            <i class="text-2xl text-white py-3 px-4 bg-red-500 rounded-full fa-solid fa-dollar-sign"></i>
                            <div>
                                <h3 className='font-bold text-xl'>LOWSET PRICE GUARANTEE</h3>
                                <p className='mt-1'>Odio eu viverra tincdunt trstique</p>
                            </div>
                        </div>
                        <div className='flex gap-x-4 items-center mt-2'>
                            <i class="text-2xl text-white p-3 bg-red-500 rounded-full fa-solid fa-check-double"></i>
                            <div>
                                <h3 className='font-bold text-xl'>FREE CANCELLATION</h3>
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