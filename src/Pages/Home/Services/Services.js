import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id='courses' className='container'>
            <div className="row">
                <h1 className='text-dark text-center mt-5 mb-4'>Courses</h1>
                <div className="courses-container">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        >
                        </Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;