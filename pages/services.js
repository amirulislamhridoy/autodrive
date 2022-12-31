import React from 'react';
import SubBanner from '../components/SubBanner';
import ServicesContent from '../components/Services/ServicesContent';
import Head from 'next/head';
import ServiceContentBlog from '../components/Services/ServiceContentBlog';
import ServicesItems from '../components/Services/ServicesItems'
import Footer from '../components/Footer'

const services = () => {
    return (
        <main>
            <Head><title>SERVICES</title></Head>
            <SubBanner url={'https://kitnew.moxcreative.com/mobirentz/wp-content/uploads/sites/28/2022/12/automotive-dealership-store.jpg'}>WHAT WE OFFER</SubBanner>
            <ServicesContent></ServicesContent>
            <ServiceContentBlog></ServiceContentBlog>
            <ServicesItems></ServicesItems>
            <Footer></Footer>
        </main>
    );
};

export default services;