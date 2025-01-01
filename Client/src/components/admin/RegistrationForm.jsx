import React from 'react';
import UserStore from '../../store/UserStore';
import ValidationHelper from '../../utility/ValidationHelper';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const RegistrationForm = () => {

    const Navigate = useNavigate();
    const { RegisterFormValue, RegisterFormOnChange, RegisterRequest } = UserStore();

    const onFormSubmit = async (event) => {
        event.preventDefault(); 
        const postBody = { ...RegisterFormValue };
        try {
            let response = await RegisterRequest(postBody);
            if (response.status === 'Success') {
                setTimeout(() => {
                    Navigate('/admin/login');
                },1000)
                toast.success("Registration Success");
            } else {
                toast.error("Registration Failure");
            }
        } catch (err) {
            toast.error('Error registering user:', err.message);
        }
    }

    
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-6 col-lg-5">
                <div className="bg-primary p-4 rounded shadow animate-fade-in">
                    <h2 className="form-title text-center text-white mb-4">Create Account</h2>
                    <form>
                        <div className="mb-2">
                            <label className="form-label text-white">First Name</label>
                            <input value={RegisterFormValue.firstName} onChange={(event) => {RegisterFormOnChange('firstName', event.target.value)}} type="text" className="form-control" placeholder="John" />
                        </div>

                        <div className="mb-1">
                            <label className="form-label text-white">Last Name</label>
                            <input value={RegisterFormValue.lastName} onChange={(event) => {RegisterFormOnChange('lastName', event.target.value)}} type="text" className="form-control" placeholder="Doe"/>
                        </div>

                        <div className="mb-1">
                            <label className="form-label text-white">Phone Number</label>
                            <input value={RegisterFormValue.phone} onChange={(event) => {RegisterFormOnChange('phone', event.target.value)}} type="text" className="form-control" placeholder="+12 345 6789"/>
                        </div>

                        <div className="mb-1">
                            <label className="form-label text-white">Email Address</label>
                            <input value={RegisterFormValue.email} onChange={(event) => {RegisterFormOnChange('email', event.target.value)}} required  type="email" className="form-control" placeholder="john@example.com" />
                        </div>

                        <div className="mb-1">
                            <label className="form-label text-white">Password</label>
                            <input value={RegisterFormValue.password} onChange={(event) => {RegisterFormOnChange('password', event.target.value)}} required type="password" className="form-control" placeholder="••••••••" />
                        </div>

                        <div className="mt-4">
                            <button onClick={onFormSubmit} type="submit" className="btn btn-lg btn-info w-100 text-white">Registration</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;