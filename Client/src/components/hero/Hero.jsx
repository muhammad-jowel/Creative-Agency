import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {

    const handleScrollToTop = () => { window.scrollTo({ top: 0, behavior: "smooth" }); };

    return (
        <div>
            <header className="container-fluid text-light mb-5 background-image">
                <div className="row text-center">
                    <div className="col-12">
                        <h1 className="display-4 fw-bold">Welcome to Our Website</h1>
                        <p className="lead">For your business, We will discover amazing content, explore new ideas, and stay connected with us.</p>
                        <Link onClick={handleScrollToTop} to='/service' className="btn fw-bold text-dark btn-warning">Our Services</Link>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Hero;