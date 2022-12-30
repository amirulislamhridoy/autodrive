import React from 'react';
import Head from 'next/head';
import AboutContent from '../components/About/AboutContent';
import DrivingComfort from '../components/About/DrivingComfort';
import Footer from './../components/Footer'
import SubBanner from '../components/SubBanner';

const about = () => {
    return (
        <main>
            <Head>
                <title>ABOUT US</title>
            </Head>
            <SubBanner url={'https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/2021/12/hero-about.jpg'}>ABOUT US</SubBanner>
            <AboutContent></AboutContent>
            <DrivingComfort></DrivingComfort>
            <Footer></Footer>
        </main>
    );
};

export default about;