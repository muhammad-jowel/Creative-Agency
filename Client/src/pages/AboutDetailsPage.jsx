import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import AboutDetails from '../components/about/AboutDetails';
import TeamStore from '../store/TeamStore';
import Team from '../components/team/Team';

const AboutDetailsPage = () => {

    const { TeamListRequest } = TeamStore();

    useEffect(() => {
        (async () => {
            await TeamListRequest();

        })()
    }, []);

    return (
        <Layout>
            <AboutDetails/>
            <Team/>
        </Layout>
    );
};

export default AboutDetailsPage;