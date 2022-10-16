import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import location from "./public/location.png";
import email from "./public/email.png";
import whatsappContact from "./public/whatsapp_contact.png";
import IG1 from "./public/IG1.png";
import IG2 from "./public/IG2.png";
import IG3 from "./public/IG3.png";
import IG4 from "./public/IG4.png";
import IG5 from "./public/IG5.png";
import IG6 from "./public/IG6.jpg";
import IG7 from "./public/IG7.png";
import IG8 from "./public/IG8.png";

export const meta_info = {
    brand: "INADS",
    description: "Official website of Inads",
};

export const nav_links = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Analytics", url: "/analytics" },
    { name: "Services", url: "/services" },
    { name: "Contact Us", url: "/contact" },
];

export const image_gallery = [
    { src: IG1, text: "Media Planning & Strategy" },
    { src: IG2, text: "Creativity" },
    { src: IG3, text: "Production" },
    { src: IG7, text: "Branding" },
    { src: IG4, text: "Social Media" },
    { src: IG8, text: "Photography & Video Production" },
    { src: IG6, text: "Blogging" },
    { src: IG5, text: "Events" },
];

export const social_icons = [
    { name: "Facebook", url: "https://www.facebook.com/inadsgroup", icon: <FaFacebookF /> },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/inadsgroup/",
        icon: <FaLinkedinIn />,
    },
    { name: "Twitter", url: "https://twitter.com/inadsgroup", icon: <FaTwitter /> },
    { name: "Instagram", url: "https://www.instagram.com/inadsgroup/", icon: <FaInstagram /> },
];

export const analysis_steps = [
    { num: 1, text: "Design study to measure campaign goals" },
    { num: 2, text: "Activate campaign" },
    { num: 3, text: "Segment exposed (test) and unexposed (control)" },
    { num: 4, text: "Survey brand lift questions or Measure Conversions" },
    {
        num: 5,
        text: "Assess Lift as a result of INADS campaign + audience analytics and demographics",
    },
];

export const contact_boxes = [
    { type: "Location", info: "Hleatan tower, Floor 11, Office 1104", icon: location },
    { type: "Mail", info: "info@inadsgroup.com", icon: email },
    { type: "WhatsApp", info: "0097450050602", icon: whatsappContact },
];

export const form_inputs = [
    {
        type: "text",
        name: "full-name",
        placeholder: "Full Name",
        className:
            "p-4 bg-[#1F1F1F] font-ps font-normal text-white text-base md:text-lg border-none outline-none focus:outline-primary focus:outline-offset-0 focus:outline-1 transition-all ease-in rounded-lg",
    },
    {
        type: "text",
        name: "subject",
        placeholder: "Subject",
        className:
            "p-4 bg-[#1F1F1F] font-ps font-normal text-white text-base md:text-lg border-none outline-none focus:outline-primary focus:outline-offset-0 focus:outline-1 transition-all ease-in rounded-lg",
    },
    {
        type: "email",
        name: "email",
        placeholder: "Email",
        className:
            "p-4 bg-[#1F1F1F] font-ps font-normal text-white text-base md:text-lg border-none outline-none focus:outline-primary focus:outline-offset-0 focus:outline-1 transition-all ease-in rounded-lg",
    },
    {
        type: "tel",
        name: "full-phone",
        placeholder: "Phone",
        className:
            "p-4 bg-[#1F1F1F] font-ps font-normal text-white text-base md:text-lg border-none outline-none focus:outline-primary focus:outline-offset-0 focus:outline-1 transition-all ease-in rounded-lg",
    },
];

export const counters = [
    { num: 787, text: "IMPRESSIONS/MONTH" },
    { num: 1628, text: "HOURS OF CONTENT PLAYED" },
    { num: 2415, text: "SQ MI OF COVERAGE" },
];

export const footer = {
    PO: "PO: 2255",
    state: "Doha-Qatar",
    email: "info@inadsgroup.com",
    telephone: "97450050602",
};
