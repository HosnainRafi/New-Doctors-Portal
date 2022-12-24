import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg';
import location from '../../../assets/icons/marker.svg';
import contact from '../../../assets/icons/phone.svg';

const Information = [
    {
        name: 'Opening Hours',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, veniam.',
        image: clock,
        background: `linear-gradient(to right,rgb(15, 207, 236), rgb(25, 211, 174))`,
    },
    {
        name: 'Visits Our Location',
        description: 'Broklyn, New-Work,US',
        image: location,
        background: `linear-gradient(to right,rgb(58, 66, 86), rgb(58, 66, 85))`,

    },
    {
        name: 'Contact us now',
        description: '+8801754659997',
        image: contact,
        background: `linear-gradient(to right,rgb(15, 207, 236), rgb(25, 211, 174))`,

    }

]

const info = () => {
    return (
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 px-12">
            {
                Information.map(info => <InfoCard
                    info={info}
                    key={info.name}
                ></InfoCard>)
            }
        </div>
    );
};

export default info;