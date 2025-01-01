import React from 'react';
import AboutImg from '../../assets/image/about-group-pic.png';
import { Link } from 'react-router-dom';


const About = () => {

    const handleScrollToTop = () => { window.scrollTo({ top: 0, behavior: "smooth" }); };

    return (
        <div>
           <section className="container my-5"> 
                <div className="row align-items-center"> 
                    <div className="col-lg-6 col-md-6 col-sm-12"> 
                        <h2 className="mb-3 fw-bold text-warning">About Us</h2> 
                        <p className="lead mb-4"> We are a team of creative professionals dedicated to delivering innovative solutions to help your business grow and achieve its goals. With a passion for design and technology, we strive to create impactful and visually stunning content that resonates with your audience. Our collaborative approach ensures that every project is tailored to meet your unique needs, delivering exceptional results every time. </p>
                        <Link to='/about-details' onClick={handleScrollToTop} className="btn fw-bold text-dark btn-warning">More Details</Link> 
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img className="img-fluid" src={AboutImg} alt=""/>
                    </div>
                </div> 
            </section>
        </div>
    );
};

export default About;