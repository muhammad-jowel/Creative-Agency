import React from 'react';
import NavLogo from '../../assets/image/nav-logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container py-2">
                    <img src={NavLogo} className="navbar-brand Nav-Logo"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link to='/' className="btn fw-bold text-dark btn-outline-warning" type="button">Home</Link>
                            </li>
                            <li className="nav-item px-4">
                                <Link to='/service' className="btn fw-bold text-dark btn-outline-warning" type="button">Our Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/blog' className="btn fw-bold text-dark btn-outline-warning" type="button" >Our Blog</Link>
                            </li>
                            <li className="nav-item ps-4">
                                <Link to='/about' className="btn fw-bold text-dark btn-outline-warning" type="button">About Us</Link>
                            </li>
                        </ul>
                        <Link to='/contact' className="btn fw-bold py-2 btn-warning ms-lg-3" type="button">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;