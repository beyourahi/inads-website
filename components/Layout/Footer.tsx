import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { footer } from "data";
import { nav_links } from "data";
import logo from "../../public/logo.png";
import whatsapp from "../../public/whatsapp.png";

const { PO, state, email, telephone } = footer;

const social_icons = [
    { name: "Facebook", url: "https://www.facebook.com", icon: <FaFacebookF /> },
    { name: "LinkedIn", url: "https://www.linkedin.com", icon: <FaLinkedinIn /> },
    { name: "Twitter", url: "https://www.twitter.com", icon: <FaTwitter /> },
    { name: "Instagram", url: "https://www.instagram.com", icon: <FaInstagram /> },
];

export const Footer: React.FC = () => (
    <footer className="bg-black text-white divide-y-[1px] divide-white/25">
        <div className="container mx-auto px-36">
            {/*//! Top */}
            <div className="flex justify-between py-24">
                {/*//// Logo */}
                <div className="space-y-6">
                    <Image src={logo} alt="Logo" className="object-contain" />
                    <h2 className="text-lg font-ps font-normal">
                        Innovative street level <br /> media company in Qatar
                    </h2>
                </div>

                {/*//// Quick Links */}
                <div className="space-y-6">
                    <h1 className="text-lg font-np font-medium">QUICK LINKS</h1>

                    <div className="flex flex-col space-y-2">
                        {nav_links.map(link => (
                            <span
                                key={link.name}
                                className="hover:text-primary font-ps font-normal transition-all ease-in"
                            >
                                <Link href={link.url}>{link.name}</Link>
                            </span>
                        ))}
                    </div>
                </div>

                {/*//// Get in touch */}
                <div className="space-y-6">
                    <h1 className="text-lg font-np font-medium">GET IN TOUCH</h1>

                    <div className="flex flex-col space-y-6">
                        <div className="flex items-center space-x-4">
                            <span className="text-primary text-2xl">
                                <FaMapMarkerAlt />
                            </span>
                            <span className="font-ps font-normal">
                                {PO} <br />
                                {state}
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-primary text-2xl">
                                <MdEmail />
                            </span>
                            <span className="font-ps font-normal">{email}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Image
                                src={whatsapp}
                                alt="WhatsApp"
                                className="object-contain text-primary"
                            />
                            <span className="font-ps font-normal">{telephone}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/*//! Bottom */}
            <div className="flex justify-between py-8">
                <div>
                    <span className="text-base font-mont">
                        &copy; {new Date().getFullYear()} Inads. All rights reserved
                    </span>
                </div>

                <div className="flex space-x-6 text-xl">
                    {social_icons.map(icon => (
                        <span
                            key={icon.name}
                            className="hover:text-primary hover:scale-110 transition-all ease-in"
                        >
                            <a href={icon.url} target="_blank" rel="noreferrer">
                                {icon.icon}
                            </a>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </footer>
);
