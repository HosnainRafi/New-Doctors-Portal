import React from 'react';

const Service = ({service}) => {

    const {name,img,description} = service;

    return (
        <div class="card card-compact w-97 mb-12 card-center bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;