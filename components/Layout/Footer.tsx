import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { footer } from "data";
import { nav_links } from "data";

const { PO, state, email, telephone } = footer;

export const Footer: React.FC = () => (
    <footer className="bg-black text-white">
        <div className="container mx-auto px-36 ⚡ divide-y-[1px] divide-white/25">
            {/*//! Top */}
            <div className="flex justify-between py-24">
                {/*//// Logo */}
                <div>
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        height={50}
                        width={150}
                        className="object-contain"
                    />
                    <h2 className="text-lg">
                        Innovative street level <br /> media company in Qatar
                    </h2>
                </div>

                {/*//// Quick Links */}
                <div className="space-y-6">
                    <h1 className="text-lg font-medium">QUICK LINKS</h1>

                    <div className="flex flex-col space-y-2">
                        {nav_links.map(link => (
                            <span
                                key={link.name}
                                className="hover:text-primary transition-all ease-in"
                            >
                                <Link href={link.url}>{link.name}</Link>
                            </span>
                        ))}
                    </div>
                </div>

                {/*//// Get in touch */}
                <div className="space-y-6">
                    <h1 className="text-lg font-medium">GET IN TOUCH</h1>

                    <div className="flex flex-col space-y-6">
                        <div className="flex items-center space-x-4">
                            <span className="text-primary text-2xl">
                                <FaMapMarkerAlt />
                            </span>
                            <span>
                                {PO} <br />
                                {state}
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-primary text-2xl">
                                <MdEmail />
                            </span>
                            <span>{email}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-primary text-2xl">
                                <FaPhoneAlt />
                            </span>
                            <span>{telephone}</span>
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

                <div className="flex space-x-5 text-xl">
                    <span className="hover:text-primary transition-all ease-in">
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                            <FaFacebookF />
                        </a>
                    </span>

                    <span className="hover:text-primary transition-all ease-in">
                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                            <FaLinkedinIn />
                        </a>
                    </span>

                    <span className="hover:text-primary transition-all ease-in">
                        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                            <FaTwitter />
                        </a>
                    </span>

                    <span className="hover:text-primary transition-all ease-in">
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                            <FaInstagram />
                        </a>
                    </span>
                </div>
            </div>
        </div>
    </footer>
);
