import type { NextPage } from "next";
import { AboutHero, AboutMission, AboutUs, AboutVision, Layout } from "../components";

const About: NextPage = () => (
    <Layout page="About">
        {/*//! Hero */}
        <AboutHero />

        {/*//! About Us  */}
        <AboutUs />

        {/*//! Vision */}
        <AboutVision />

        {/*//! Mission */}
        <AboutMission />
    </Layout>
);

export default About;
