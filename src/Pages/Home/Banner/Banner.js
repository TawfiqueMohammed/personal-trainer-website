import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner3.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item >
                    <div className='item'>
                        <img
                            className="slide d-block w-100"
                            src={banner3}
                            alt="Second slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3 className='text--white'>Holistic Personal Development</h3>
                        <p>I am thrilled to share these holistic personal development courses with you.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <div className='item'>
                        <img
                            className="slide d-block w-100"
                            src={banner1}
                            alt="Second slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3 className='text--white'> Self-Help Courses for You</h3>
                        <p>Each course was created from the heart and designed around the skills I have found to be most powerful in my own life and in my work with clients.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <div className='item'>
                        <img
                            className="slide d-block w-100"
                            src={banner2}
                            alt="Second slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3 className='text--white'>Professional Development for Mental Health Professionals</h3>
                        <p>Each course is an investment in YOU and YOUR WELLNESS! Can’t wait to see you on the inside</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;