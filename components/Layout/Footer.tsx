import Image from "next/image";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { footer } from "data";
import { nav_links } from "data";
import { social_icons } from "data";
import logo from "../../public/logo.png";
import whatsapp from "../../public/whatsapp.png";

const { PO, state, email, telephone } = footer;

export const Footer: React.FC = () => (
    <footer className="bg-black text-white">
        <div className="container mx-auto px-8 lg:px-24 xl:px-36 divide-y-[1px] divide-white/30">
            {/*//! Top */}
            <div className="flex flex-col justify-between space-y-16 py-14 md:flex-row md:space-y-0 lg:py-24">
                {/*//// Logo */}
                <div className="space-y-6">
                    <Image src={logo} alt="Logo" className="object-contain" />
                    <h2 className="text-lg md:text-base lg:text-lg font-ps font-normal">
                        Innovative street level <br /> media company in Qatar
                    </h2>
                </div>

                {/*//// Quick Links */}
                <div className="space-y-6">
                    <h1 className="text-xl md:text-lg lg:text-xl font-np font-medium">
                        QUICK LINKS
                    </h1>

                    <div className="flex flex-col space-y-2">
                        {nav_links.map(link => (
                            <span
                                key={link.name}
                                className="hover:text-primary text-lg md:text-base lg:text-lg font-ps font-normal transition-all ease-in"
                            >
                                <Link href={link.url}>{link.name}</Link>
                            </span>
                        ))}
                    </div>
                </div>

                {/*//// Get in touch */}
                <div className="space-y-6">
                    <h1 className="text-xl md:text-lg lg:text-xl font-np font-medium">
                        GET IN TOUCH
                    </h1>

                    <div className="flex flex-col space-y-6">
                        <div className="flex items-center space-x-4">
                            <span className="text-primary text-2xl">
                                <FaMapMarkerAlt />
                            </span>
                            <span className="text-lg md:text-base lg:text-lg font-ps font-normal">
                                {PO} <br />
                                {state}
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-primary text-2xl">
                                <MdEmail />
                            </span>

                            <a
                                href="mailto:info@inadsgroup.com"
                                className="text-lg md:text-base lg:text-lg font-ps font-normal"
                            >
                                {email}
                            </a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Image
                                src={whatsapp}
                                alt="WhatsApp"
                                className="object-contain text-primary"
                            />
                            <span className="text-lg md:text-base lg:text-lg font-ps font-normal">
                                {telephone}
                            </span>
                        </div>

                        <div className="flex md:hidden space-x-8 text-xl">
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
            </div>

            {/*//! Bottom */}
            <div className="flex flex-col justify-between py-8 items-center md:flex-row md:space-y-0">
                <div>
                    <span className="text-base font-mont font-medium">
                        &copy; {new Date().getFullYear()} Inads. All rights reserved
                    </span>
                </div>

                <div className="hidden md:flex space-x-8 text-xl">
                    {social_icons.map(icon => (
                        <span
                            key={icon.name}
                            className="hover:text-primary hover:scale-[1.3] transition-all ease-in duration-100"
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
