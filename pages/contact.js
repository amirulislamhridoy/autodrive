import React from 'react';
import SubBanner from '../components/SubBanner';
import Head from 'next/head';
import ContactForm from '../components/Contact/ContactForm';

const contact = () => {
    return (
        <main>
            <Head><title>CONTACT US</title></Head>
            <SubBanner url={'https://templatekits.themewarrior.com/autodrive/wp-content/uploads/sites/42/2021/12/hero-contact.jpg'}>CONTAC US</SubBanner>
            <ContactForm></ContactForm>
        </main>
    );
};

export default contact;