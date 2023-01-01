import React from 'react';
import SubBanner from '../components/SubBanner';
import Head from 'next/head';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/Footer';
// import Map from '../components/Contact/Map';

const contact = () => {
    return (
        <main>
            <Head><title>CONTACT US</title></Head>
            <SubBanner url={'https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/2021/12/hero-contact.jpg'}>CONTAC US</SubBanner>
            {/* <Map></Map> */}
            <ContactForm></ContactForm>
            <Footer></Footer>
        </main>
    );
};

export default contact;