import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'
import UserStore from '../../store/UserStore';

const Dashboard = () => {

  const { LogoutRequest } = UserStore();

  const onLogout = async () => {
    let res = await LogoutRequest();
    if (res) {
        Cookies.remove('token')
        sessionStorage.clear();
        localStorage.clear();
        window.location.href="/"
    }
    
}

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between p-4">
      <h2 className='fw-bold text-primary'>Dashboard</h2>
        {/* Logout Button */}
        <div className="mt-auto">
          <button onClick={onLogout} className="btn btn-danger px-4">Logout</button>
        </div>          
      </div> 

      <div className="container p-5">
    <div className="text-center">
      <h1 className="display-4 fw-bold text-primary mb-4">Welcome to the Admin Dashboard</h1>
      <p className="lead text-muted mb-5">From here the admin can manage every content</p>
      <Link to="/" className="btn btn-warning fw-bold text-dark px-5 py-3 rounded-pill shadow-sm">
        Go To Home
      </Link>
    </div>
  </div>
    </div>
  );
};

export default Dashboard;
