import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserStore from '../../store/UserStore';
import { toast } from 'react-toastify';

const LoginForm = () => {


    const Navigate = useNavigate();
    const { LoginFormValue, LoginFormOnChange, LoginRequest } = UserStore();

    const onFormSubmit = async (event) => {
        event.preventDefault(); 
        const postBody = { ...LoginFormValue };
        try {
            let response = await LoginRequest(postBody);
            if (response.status === 'success') {
                setTimeout(() => {
                    Navigate('/admin/verify-login');
                },1000)
                toast.success("Your 6 Digit Code Has Been Send Successfully");
            } else {
                toast.error("Fail to send to code");
            }
        } catch (err) {
            toast.error('Error to send code:', err.message);
        }
    }


    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <div className="col-md-6 col-lg-4">
            <div className="bg-primary p-4 rounded shadow animate-fade-in">
              <h2 className="form-title text-center text-white mb-4">Login</h2>
              <form>
                <div className="mb-3">
                  <label className="form-label text-white">Email address</label>
                  <input value={LoginFormValue.email} onChange={(event) => {LoginFormOnChange('email', event.target.value)}} required type="email" className="form-control" placeholder="Enter your email"  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label text-white">Password</label>
                  <input value={LoginFormValue.password} onChange={(event) => {LoginFormOnChange('password', event.target.value)}} required type="password" className="form-control" placeholder="Enter your password"  />
                </div>

                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label text-white" htmlFor="rememberMe">Remember me</label>
                </div>

                <button onClick={onFormSubmit} type="submit" className="btn btn-lg btn-info w-100 text-white">Login</button>
              </form>
            </div>
          </div>
        </div>
    );
};

export default LoginForm;