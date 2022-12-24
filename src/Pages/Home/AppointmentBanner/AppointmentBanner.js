import React from 'react';
import image from '../../../assets/images/doctor.png';
import background from '../../../assets/images/appointment.png';


const appointmentBg = {
    background: `url(${background})`,
    //backgroundPosition: 'center',
    //backgroundSize: 'cover',
    //backgroundRepeat: 'no-repeat',
}

const AppointmentBanner = () => {
    return (
        <section style={appointmentBg} class="lg:flex lg:justify-center lg:items-center px-12 ">
            <div class=" lg:flex-1">
                <img class="mt-[-125px]  lg:h-[572px] hidden lg:block" src={image} />
            </div>
            <div class="lg:flex-1 text-white pt-24 pb-12">
                <h3 className='text-primary font-bold text-xl'>Appointment</h3>
                <h1 class="text-4xl font-bold">Make an appointment Today</h1>
                <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button class="btn btn-primary text-white font-bold uppercase bg-gradient-to-r from-primary to-secondary">Get Started</button>
            </div>
            
        </section>
    );
};

export default AppointmentBanner;

