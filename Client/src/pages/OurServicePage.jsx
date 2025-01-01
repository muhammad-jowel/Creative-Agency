import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Service from '../components/service/Service';
import ServiceStore from '../store/ServiceStore';
import Contact from '../components/contact/Contact';





const OurServicePage = () => {

    const { ServiceListRequest } = ServiceStore();

    useEffect(() => {
        (async () => {
            await ServiceListRequest();
        })()
    }, []);

    return (
        <Layout>
            <Service/>
            <Contact/>
        </Layout>
    );
};

export default OurServicePage;