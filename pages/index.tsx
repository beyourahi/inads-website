import type { NextPage } from "next";
import { Features, Hero, HeroAbout, Layout } from "../components";

const Home: NextPage = () => (
    <Layout page="Home">
        {/*//! Hero */}
        <Hero />

        {/*//!  About Us  */}
        <HeroAbout />

        {/*//!  Features  */}
        <Features />

        {/*//! Contact Us */}
    </Layout>
);

export default Home;
