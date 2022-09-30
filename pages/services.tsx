import type { NextPage } from "next";
import { Layout, ServicesHero, ServicesList } from "../components";

const Services: NextPage = () => (
    <Layout page="Services">
        {/*//! Hero */}
        <ServicesHero />

        {/*//! Services List */}
        <ServicesList />
    </Layout>
);

export default Services;
