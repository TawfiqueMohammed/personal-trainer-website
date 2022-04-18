import { Button } from 'bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';

const Checkout = () => {
    return (
        <div className='container'>
            <h2 className='text-center pt-3 text-warning fw-bold'>Course Payment Details</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Full Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Card Details</Form.Label>
                    <Form.Control type="text" placeholder="Enter Card Details" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Certificate Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Certificate Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Billing Address</Form.Label>
                    <Form.Control type="text" placeholder="Billing Address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Total</Form.Label>
                    <Form.Control type="text" placeholder="Enter Total" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <button className='btn btn-warning'>Submit</button>
            </Form>
        </div>
    );
};

export default Checkout;