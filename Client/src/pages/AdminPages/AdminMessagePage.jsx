import React, { useEffect } from 'react';
import AdminLayout from '../../components/admin/adminLayout/AdminLayout';
import MessageStore from '../../store/MessageStore';
import AdminMessage from '../../components/admin/AdminMessage';

const AdminMessagePage = () => {

    const { MessageListRequest } = MessageStore();

    useEffect(() => {
        (async () => {
            await MessageListRequest();
        })()
    },[])

    return (
        <AdminLayout>
            <AdminMessage/>
        </AdminLayout>
    );
};

export default AdminMessagePage;