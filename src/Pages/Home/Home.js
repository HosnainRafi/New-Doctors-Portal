import React from 'react';
import Contact from '../ContactUs/Contact';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Banner from './Banner/Banner';
import Info from './Info/Info';
import Services from './Services/Services';
import ServicesBanner from './ServicesBanner/ServicesBanner';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Info></Info>
            <Services></Services>
            <ServicesBanner></ServicesBanner>
            <AppointmentBanner></AppointmentBanner>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;