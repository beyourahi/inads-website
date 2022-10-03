import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import location from "./public/location.png";
import email from "./public/email.png";
import whatsappContact from "./public/whatsapp_contact.png";

export const meta_info = {
    brand: "Inads",
    description: "Official website of Inads",
};

export const nav_links = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Analytics", url: "/analytics" },
    { name: "Services", url: "/services" },
    { name: "Contact Us", url: "/contact" },
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
            "p-4 bg-[#1F1F1F] font-ps font-normal text-white text-base md:text-lg border-none outline-none focus:outline-primary focus:outline-offset-0 focus:outline-1 transition-all ease-in",
    },
    {
        type: "text",
        name: "subject",
        placeholder: "Subject",
        className:
            "p-4 bg-[#1F1F1F] font-ps font-normal text-white text-base md:text-lg border-none outline-none focus:outline-primary focus:outline-offset-0 focus:outline-1 transition-all ease-in",
    },
    {
        type: "email",
        name: "email",
        placeholder: "Email",
        className:
            "p-4 bg-[#1F1F1F] font-ps font-normal text-white text-base md:text-lg border-none outline-none focus:outline-primary focus:outline-offset-0 focus:outline-1 transition-all ease-in",
    },
    {
        type: "tel",
        name: "full-phone",
        placeholder: "Phone",
        className:
            "p-4 bg-[#1F1F1F] font-ps font-normal text-white text-base md:text-lg border-none outline-none focus:outline-primary focus:outline-offset-0 focus:outline-1 transition-all ease-in",
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
    telephone: "0097450050602",
};
