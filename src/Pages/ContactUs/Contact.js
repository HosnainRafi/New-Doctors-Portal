import React from 'react';
import background from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <div style={{background: `url(${background})`,backgroundRepeat:'none',}} class="text-center pt-24 pb-12">
            <p class="text-primary font-bold text-lg">Contact Us</p>
            <h3 class="text-3xl mb-12 text-white">Stay Connected with us</h3>
            <input type="email" placeholder="Email Address" class="input input-bordered w-full max-w-xs mb-4" />
            <br />
            <input type="text" placeholder="Subject" class="input input-bordered w-full max-w-xs mb-4" />
            <br />
            <textarea class="textarea textarea-bordered resize: none mb-4" placeholder="Type your message" cols="42"></textarea>
            <br />
            <button class="btn btn-primary text-white font-bold uppercase bg-gradient-to-r from-primary to-secondary" >Submit</button>
        </div>
    );
};

export default Contact;