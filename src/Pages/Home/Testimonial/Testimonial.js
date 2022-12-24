import React from 'react';
import SingleTestimonial from './SingleTestimonial';
import pic1 from '../../../assets/images/people1.png';
import pic2 from '../../../assets/images/people2.png';
import pic3 from '../../../assets/images/people3.png';
import bg from '../../../assets/icons/quote.svg'

const Testimon = [
    {
        name: 'Cayle Broke',
        place: 'Washington',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque necessitatibus corporis natus. Voluptatem itaque explicabo, id alias atque quasi voluptatum voluptas sit animi fugiat iste omnis quidem dolore sequi, officiis dolor reprehenderit earum perspiciatis enim unde quam a odit corrupti.',
        image: pic1
    },
    {
        name: 'Bayektor',
        place: 'London',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque necessitatibus corporis natus. Voluptatem itaque explicabo, id alias atque quasi voluptatum voluptas sit animi fugiat iste omnis quidem dolore sequi, officiis dolor reprehenderit earum perspiciatis enim unde quam a odit corrupti.',
        image: pic2
    },
    {
        name: 'Robinhood',
        place: 'New York',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque necessitatibus corporis natus. Voluptatem itaque explicabo, id alias atque quasi voluptatum voluptas sit animi fugiat iste omnis quidem dolore sequi, officiis dolor reprehenderit earum perspiciatis enim unde quam a odit corrupti.',
        image: pic3
    },
]

const Testimonial = () => {

    return (
        <div style={{background: `url(${bg})`,backgroundRepeat:'no-repeat',backgroundPosition:'top right 100px',backgroundSize:'10%'}} className="px-12 lg:mt-24 my-24">
            <h3 className='text-primary font-bold text-xl'>Testimonial</h3>
            <h1 className='text-3xl lg:mb-12'>What Our patient's said</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-12 my-12">
            {
                Testimon.map(testi => <SingleTestimonial
                testi={testi}
                key={testi.name}
                ></SingleTestimonial>)
            }
            </div>
            
        </div>
    );
};

export default Testimonial;