import React from 'react';

const Note = () => {
    return (
        <div id='note' style={{ border: '1px solid grey' }} className='container mt-5 p-5 rounded-3'>
            <h1>A Note From <span className=''>Tawfique Umar</span></h1>
            <h1>Therapist | <span className='text-warning'>Educator</span> | Speaker</h1>
            <h5 className='fw-light pt-2'>I am so happy you are here and I am thrilled to share this online learning platform with you!
                <br />
                <div>
                    These courses include my favorite holistic, trauma informed modalities that have transformed both my clinical practice and personal life.
                </div>
                <br />
                <div>
                    I can not wait to hear about the powerful impact they have on your life! Take a look around, sign up for the course that resonates with you in your current life chapter, and join our community!
                </div>
                <br />
                Much love,
                <div>Tawfique Umar</div></h5>
        </div>
    );
};

export default Note;