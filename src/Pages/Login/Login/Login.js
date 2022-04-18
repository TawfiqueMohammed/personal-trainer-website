import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import SocialLogin from '../SocialLogin/SocialLogin';
import { sendPasswordResetEmail } from 'firebase/auth';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }
    return (
        <div className='login-form container w-50 mx-auto'>
            <h2 className='text-dark text-center mt-5 pb-3'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="warning w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <div className='text-center'>
                <p>New here? <Link to="/register" className='text-warning fw-bold pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
                <p>Forgot Password? <button className='btn btn-link fw-bold text-warning pe-auto text-decoration-none p-0' onClick={resetPassword}>Reset Password</button> </p>
            </div>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;