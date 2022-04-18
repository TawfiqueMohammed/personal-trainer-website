import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='text-center pt-3 text-warning fw-bold'>Blogs</h2>
            <h4><span className='fw-bold'>Question:</span> Differences Between Authorization and Authentication</h4>
            <p><span className='fw-bold'>Answer:</span> Authentication is the process of verifying who a user is, while authorization is the process of verifying what they have access to. Comparing these processes to a real-world example, when you go through security in an airport, you show your ID to authenticate your identity. </p>
            <h4><span className='fw-bold'>Question:</span> Why are you using firebase? What other options do you have to implement authentication? </h4>
            <p><span className='fw-bold'>Answer:</span> I am using firebase for my projects login and signup operation. It allows me to login with facebook, github, google and many more. Firebase alternatives are: Parse, Back4app, Kinvey, Backendless, Kuzzle, Flutter etc.</p>
            <h4><span className='fw-bold'>Question:</span> What other services does firebase provide other than authentication?</h4>
            <p><span className='fw-bold'>Answer:</span> Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
        </div>
    );
};

export default Blogs;