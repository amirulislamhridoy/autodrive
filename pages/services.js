import React from 'react';
import SubBanner from '../components/SubBanner';
import bg from '../assets/automotive-dealership-store.jpg'
import ServicesContent from '../components/Services/ServicesContent';

const services = () => {
    return (
        <main>
            <SubBanner url={'https://kitnew.moxcreative.com/mobirentz/wp-content/uploads/sites/28/2022/12/automotive-dealership-store.jpg'}>WHAT WE OFFER</SubBanner>
            <ServicesContent></ServicesContent>
        </main>
    );
};

export default services;