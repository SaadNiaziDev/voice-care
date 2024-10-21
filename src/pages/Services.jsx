import React from 'react';
import { serviceCardData } from '../data';
import { ServiceCard } from '../components';

const Services = () => {
    return (
        <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard services={serviceCardData} />
        </div>
    );
};

export default Services;