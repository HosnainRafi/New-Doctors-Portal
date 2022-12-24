import React from 'react';

const InfoCard = ({info}) => {

    const { name, image, description,background ,color} = info;

    return (
        <div style={{backgroundImage: `${background}`}} class="card card-side bg-base-100 shadow-xl text-white">
            <figure className='pl-5'><img src={image} alt="Movie" /></figure>
            <div class="card-body text-white">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                
            </div>
        </div>
    );
};

export default InfoCard;