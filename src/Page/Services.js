import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setService]= useState([]);
    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setService(data));
    }, []);
    return (
        <div className='bg-color py-9'>
            <div className='pb-9 pt-3'>
            <h1 className='lg:text-3xl text-2xl text-center text-white'>SERVICES</h1>
            <p className='lg:text-4xl text-xl text-center text-white text-white'>We provides services to our clients.</p>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-28 px-8'>
                {
                    services.map(service=><Service key={service.id} service={service}></Service>)

                }
           </div>
        </div>
    );
};

export default Services;