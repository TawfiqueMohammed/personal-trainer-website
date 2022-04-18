import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2 className='text-center pt-4 fw-bold text-warning'>Course Details: {serviceId}</h2>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-warning'>Proceed To Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;