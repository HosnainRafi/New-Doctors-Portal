import React from 'react';
import image from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundOpacity: 0.4,
}

const Banner = () => {
    return (
        <div style={appointmentBg}>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img class="max-w-sm
                    lg:max-w-lg h-auto rounded-lg shadow-2xl ml-8" src={image} />
                    <div>
                        <h1 class="text-5xl 
                        font-bold">Your New Smile Starts Here</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary text-white font-bold uppercase bg-gradient-to-r from-primary to-secondary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;