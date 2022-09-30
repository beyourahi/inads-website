import type { NextPage } from "next";
import { HomeContact, HomeCounter, HomeFeatures, HomeHero, HomeAbout, Layout } from "../components";

const Home: NextPage = () => (
    <Layout page="Home">
        {/*//! Hero */}
        <HomeHero />

        {/*//!  About Us  */}
        <HomeAbout />

        {/*//!  Features  */}
        <HomeFeatures />

        {/*//! Counter */}
        <HomeCounter />

        {/*//! Contact Us */}
        <HomeContact />
    </Layout>
);

export default Home;
