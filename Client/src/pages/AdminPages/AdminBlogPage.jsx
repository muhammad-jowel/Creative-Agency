import React, { useEffect } from 'react';
import AdminLayout from '../../components/admin/adminLayout/AdminLayout';
import AdminBlog from '../../components/admin/AdminBlog';
import BlogStore from '../../store/BlogStore';

const AdminBlogPage = () => {


    const { BlogListRequest } = BlogStore();

    useEffect(() => {
        (async () => {
            await BlogListRequest();

        })()
    }, []);


    return (
        <AdminLayout>
            <AdminBlog/>
        </AdminLayout>
    );
};

export default AdminBlogPage;