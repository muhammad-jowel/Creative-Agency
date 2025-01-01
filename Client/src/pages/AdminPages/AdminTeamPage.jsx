import React, { useEffect } from 'react';
import AdminLayout from '../../components/admin/adminLayout/AdminLayout';
import AdminTeam from '../../components/admin/AdminTeam';
import TeamStore from '../../store/TeamStore';

const AdminTeamPage = () => {


    const { TeamListRequest } = TeamStore();

    useEffect(() => {
        (async () => {
            await TeamListRequest();

        })()
    }, []);



    return (
        <AdminLayout>
            <AdminTeam/>
        </AdminLayout>
    );
};

export default AdminTeamPage;