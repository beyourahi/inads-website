import type { NextPage } from "next";
import { Contact, Counter, Features, Hero, HeroAbout, Layout } from "../components";

const Home: NextPage = () => (
    <Layout page="Home">
        {/*//! Hero */}
        <Hero />

        {/*//!  About Us  */}
        <HeroAbout />

        {/*//!  Features  */}
        <Features />

        {/*//! Counter */}
        <Counter />

        {/*//! Contact Us */}
        <Contact />
    </Layout>
);

export default Home;
