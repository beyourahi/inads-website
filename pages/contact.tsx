import type { NextPage } from "next";
import { ContactForm, ContactHero, ContactInfo, Layout } from "../components";

const Contact: NextPage = () => (
    <Layout page="Contact">
        {/*//! Contact Hero */}
        <ContactHero />

        {/*//! Contact Info */}
        <ContactInfo />

        {/*//! Contact Form */}
        <ContactForm />
    </Layout>
);

export default Contact;
