import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Blog from '../components/blog/Blog';
import BlogStore from '../store/BlogStore';
import Contact from '../components/contact/Contact';


const OurBlogPage = () => {

    const { BlogListRequest } = BlogStore();

    useEffect(() => {
        (async () => {
            await BlogListRequest();

        })()
    }, []);


    return (
        <Layout>
            <Blog/>
            <Contact/>
        </Layout>
    );
};

export default OurBlogPage;