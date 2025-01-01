import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    const handleScrollToTop = () => { window.scrollTo({ top: 0, behavior: "smooth" }); };

    return (
        <div>
            <footer className="bg-dark text-white pt-5 pb-4">
                <div className="container text-md-left">
                    <div className="row text-md-left">
        
                        <div className="col-md-6 col-lg-4 mt-3">
                            <h5 className="text-uppercase mb-4 fw-bold text-warning">Creative Agency</h5>
                            <p className="me-5">
                                We are a team of creative professionals committed to delivering innovative solutions to grow your business and achieve your goals.
                            </p>
                        </div>
                
        
                        <div className="col-md-6 col-lg-3 mt-3">
                            <h5 className="text-uppercase mb-4 fw-bold text-warning">Quick Links</h5>
                            <Link onClick={handleScrollToTop} to='/' className="text-white d-block text-decoration-none">Home</Link>
                            <Link onClick={handleScrollToTop} to='/service' className="text-white d-block text-decoration-none py-3">Our Service</Link>
                            <Link onClick={handleScrollToTop} to='/blog' className="text-white d-block text-decoration-none">Our Blog</Link>
                            <Link onClick={handleScrollToTop} to='/about' className="text-white d-block text-decoration-none pt-3">About Us</Link>
                        </div>
                

                        <div className="col-md-6 col-lg-3 mt-3">
                            <h5 className="text-uppercase mb-4 fw-bold text-warning">Contact</h5>
                            <p className="text-white">Al Riyadh, Saudi Arabia</p>
                            <p className="text-white">softdev.jowel@gmail.com</p>
                            <p className="text-white">+966 53 449 6202</p>
                            <p className="text-white">www.creativeagency.com</p>
                        </div>
                
        
                        <div className="col-md-6 col-lg-2 mt-3">
                            <h5 className="text-uppercase mb-4 fw-bold text-warning">Follow Us</h5>
                            <a className="text-white me-4"><i className="bi bi-facebook"></i></a>
                            <a className="text-white me-4"><i className="bi bi-twitter"></i></a>
                            <a className="text-white me-4"><i className="bi bi-instagram"></i></a>
                            <a className="text-white me-4"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
            
                    <hr className="border-warning w-100" />
            

                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-6 col-sm-12 align-items-center">
                            <p>&copy; 2024 Creative Agency. All Rights Reserved.</p>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-12">
                            <p className="text-end me-auto">Development by SoftDev Jowel</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;