import React from 'react';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
    return (
        <div>
            <div>
                {/* Bottom navigation for all devices */}
                <div className="d-flex bg-primary bg-opacity-75 text-white fixed-bottom justify-content-around py-2">
                    <Link to="/admin/dashboard" className="text-center text-white text-decoration-none">
                    <i className="bi bi-house-check fs-4"></i>
                    <div style={{ fontSize: '12px' }}>Dashboard</div>
                    </Link>
                    <Link to="/admin/blog" className="text-center text-white text-decoration-none">
                    <i className="bi bi-file-text fs-4"></i>
                    <div style={{ fontSize: '12px' }}>Blog</div>
                    </Link>
                    <Link to="/admin/service" className="text-center text-white text-decoration-none">
                    <i className="bi bi-clipboard-check fs-4"></i>
                    <div style={{ fontSize: '12px' }}>Service</div>
                    </Link>
                    <Link to="/admin/team" className="text-center text-white text-decoration-none">
                    <i className="bi bi-people fs-4"></i>
                    <div style={{ fontSize: '12px' }}>Teams</div>
                    </Link>
                    <Link to="/admin/message" className="text-center text-white text-decoration-none">
                    <i className="bi bi-chat-left-dots fs-4"></i>
                    <div style={{ fontSize: '12px' }}>Message</div>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default AdminHeader;