import React, { useEffect } from 'react';
import Dashboard from '../../components/admin/Dashboard';
import AdminLayout from '../../components/admin/adminLayout/AdminLayout';

const DashboardPage = () => {


    return (
        <AdminLayout>
            <Dashboard/>
        </AdminLayout>
    );
};

export default DashboardPage;