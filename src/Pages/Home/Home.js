import React from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Banner from './Banner/Banner';
import Info from './Info/Info';
import Services from './Services/Services';
import ServicesBanner from './ServicesBanner/ServicesBanner';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Info></Info>
            <Services></Services>
            <ServicesBanner></ServicesBanner>
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;