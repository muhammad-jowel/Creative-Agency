import React from 'react';
import AdminHeader from './AdminHeader';

const AdminLayout = (props) => {
    return (
        <>
        
            {props.children}
            <AdminHeader/>
            
        </>

    );
};

export default AdminLayout;