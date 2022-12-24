import React from 'react';

const SingleTestimonial = ({ testi }) => {

    const { name, place, description, image } = testi;
    return (
        <div class="card w-96 shadow-xl pb-8">
            <div class="card-body">
                {/* <h2 class="card-title">Shoes!</h2> */}
                <p>{description}</p>
            </div>
            <div class="grid grid-cols-3 gap-8">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-6">
                    <img src={image} />
                </div>
                <div class="col-span-2">
                    <div><h3 class="font-bold text-lg mt-4">{name}</h3></div>
                    <div><p class="mb-4">{place}</p></div>
                </div>

                {/* <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure> */}
            </div>
        </div>
    );
};

export default SingleTestimonial;