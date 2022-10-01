import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { CgMenuRight } from "react-icons/cg";
import { HiMenuAlt3 } from "react-icons/hi";
import { BiMenuAltRight } from "react-icons/bi";

import { AiOutlineClose } from "react-icons/ai";
import { CgClose } from "react-icons/cg";

import { nav_links } from "data";
import logo from "../../public/logo.png";
import { useState } from "react";

const social_icons = [
    { name: "Facebook", url: "https://www.facebook.com", icon: <FaFacebookF /> },
    { name: "LinkedIn", url: "https://www.linkedin.com", icon: <FaLinkedinIn /> },
    { name: "Twitter", url: "https://www.twitter.com", icon: <FaTwitter /> },
    { name: "Instagram", url: "https://www.instagram.com", icon: <FaInstagram /> },
];

export const Navbar: React.FC = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => setNav(!nav);

    return (
        <nav className="flex justify-between items-center px-32 py-12 backdrop-blur-lg bg-transparent fixed top-0 right-0 left-0 z-50">
            {/*//! Brand */}
            <div>
                <Image src={logo} alt="Logo" className="object-contain" />
            </div>

            {/*//! Nav Links */}
            <ul className="hidden xl:flex space-x-10">
                {nav_links.map(link => (
                    <li
                        key={link.name}
                        className="hover:text-primary font-np font-medium transition-all ease-in text-lg"
                    >
                        <Link href={link.url}>{link.name}</Link>
                    </li>
                ))}
            </ul>

            {/*//! Social Icons */}
            <div className="hidden xl:flex space-x-6 text-xl">
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

            {/*//// Mobile View */}
            <div onClick={handleNav} className="block xl:hidden">
                {!nav ? (
                    <CgClose size={30} className="cursor-pointer" />
                ) : (
                    <CgMenuRight size={30} className="cursor-pointer" />
                )}
            </div>

            <div
                className={
                    !nav
                        ? "fixed top-0 left-0 w-[50%] h-screen bg-black ease-in-out duration-500 flex flex-col justify-between p-14"
                        : "fixed left-[-100%] ease-out duration-300"
                }
            >
                <div className="flex flex-col space-y-16">
                    {/*//! Brand */}
                    <div>
                        <Image src={logo} alt="Logo" className="object-contain" />
                    </div>

                    {/*//! Nav Links */}
                    <ul className="divide-y-[1px] divide-white/30">
                        {nav_links.map(link => (
                            <Link key={link.name} href={link.url}>
                                <li className="hover:text-primary cursor-pointer font-np font-medium transition-all ease-in text-lg py-6">
                                    {link.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>

                {/*//! Social Icons */}
                <div className="flex space-x-8 text-xl">
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
        </nav>
    );
};
