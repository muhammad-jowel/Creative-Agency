import React, { useEffect } from 'react';
import AdminLayout from '../../components/admin/adminLayout/AdminLayout';
import AdminService from '../../components/admin/AdminService';
import ServiceStore from '../../store/ServiceStore';

const AdminServicePage = () => {


    const { ServiceListRequest } = ServiceStore();

    useEffect(() => {
        (async () => {
            await ServiceListRequest();

        })()
    }, []);


    return (
        <AdminLayout>
            <AdminService/>
        </AdminLayout>
    );
};

export default AdminServicePage;