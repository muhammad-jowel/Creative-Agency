import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import About from '../components/about/About'
import Service from '../components/service/Service';
import Blog from '../components/blog/Blog';
import Hero from '../components/hero/Hero';
import BlogStore from '../store/BlogStore';
import ServiceStore from '../store/ServiceStore';
import Team from '../components/team/Team';
import TeamStore from '../store/TeamStore';
import Contact from '../components/contact/Contact';


const HomePage = () => {

    const { BlogListRequest } = BlogStore();
    const { ServiceListRequest } = ServiceStore();
    const { TeamListRequest } = TeamStore();

    useEffect(() => {
        (async () => {
            await BlogListRequest();
            await ServiceListRequest();
            await TeamListRequest();
        })()
    }, []);

    return (
        <Layout>
            <Hero/>
            <About/>
            <Service/>
            <Blog/>
            <Team/>
            <Contact/>
        </Layout>
    );
};

export default HomePage;