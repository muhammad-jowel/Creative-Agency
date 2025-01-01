import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Team from '../components/team/Team';
import TeamStore from '../store/TeamStore';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';


const AboutPage = () => {

    const { TeamListRequest } = TeamStore();

    useEffect(() => {
        (async () => {
            await TeamListRequest();
        })()
    }, []);

    return (
        <Layout>
            <About/>
            <Team/>
            <Contact/>
        </Layout>
    );
};

export default AboutPage;