import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const Contact = () => {


    const SendMsg = async (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        let fullName = formData.get('fullName');
        let email = formData.get('email');
        let message = formData.get('message');
        let postBody = {
            fullName,
            email,
            message
        }
        
        let response = await axios.post("https://creative-agency-lake-five.vercel.app/api/Send-Message", postBody)
        
        if (response.data.status === 'success') {
            toast.success('Your message has been sent successfully')
            event.target.reset();
        } else {
            toast.error('Failed to send message')
        }

    }


    return (
        <div>
            <section className="contact-section py-5">
                <div className="container">
                    <h2 className="text-center mb-4 fw-bold text-warning">Contact Us</h2>
                    <div className="row">

                        <div className="col-md-6 col-lg-5 mb-4">
                            <div className="p-4 bg-white rounded shadow-sm">
                                <h4 className="mb-3 fw-bold text-warning">Contact Information</h4>
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <i className="bi bi-geo-alt-fill me-2 text-primary"></i>
                                        <strong>Address:</strong> Al Riyadh, Saudi Arabia
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-envelope-fill me-2 text-primary"></i>
                                        <strong>Email:</strong> <a href="mailto:softdev.jowel@gmail.com">softdev.jowel@gmail.com</a>
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-telephone-fill me-2 text-primary"></i>
                                        <strong>Phone:</strong> <a href="tel:+966534496202">+966 53 449 6202</a>
                                    </li>
                                    <li>
                                        <i className="bi bi-globe me-2 text-primary"></i>
                                        <strong>Website:</strong> <a href="http://www.creativeagency.com">www.creativeagency.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
            
                        <div className="col-md-6 col-lg-7">
                            <div className="p-4 bg-white rounded shadow-sm">
                                <form onSubmit={SendMsg} className="contact-form">
                                    <div className="mb-3">
                                        <label for="name" className="form-label">Full Name</label>
                                        <input required type="text" className="form-control" name="fullName" placeholder="Your Name"/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Email</label>
                                        <input required type="email" className="form-control" name="email" placeholder="Your Email"/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="message" className="form-label">Message</label>
                                        <textarea required className="form-control" name="message" rows="5" placeholder="Your Message"></textarea>
                                    </div>
                                    <input type="submit" className="btn btn-warning fw-bold w-100" value='Send Message'/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;