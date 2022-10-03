import Image from "next/image";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { nav_links } from "data";
import { social_icons } from "data";
import logo from "../../public/logo.png";
import { useState } from "react";

export const Navbar: React.FC = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => setNav(!nav);

    return (
        <nav className="flex justify-between items-center py-8 xl:py-10 px-8 xl:px-32 backdrop-blur-lg bg-transparent fixed top-0 right-0 left-0 z-50">
            {/*//! Brand */}
            <Link href="/">
                <div className="cursor-pointer w-[30%] md:w-auto">
                    <Image src={logo} alt="Logo" className="object-contain" />
                </div>
            </Link>

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
            <div onClick={handleNav} className="block z-50 xl:hidden">
                {!nav ? (
                    <CgClose size={30} className="cursor-pointer" />
                ) : (
                    <BiMenuAltRight size={35} className="cursor-pointer" />
                )}
            </div>

            <div
                className={
                    !nav
                        ? "fixed top-0 left-0 w-[100%] h-screen bg-black ease-in-out duration-500 flex flex-col justify-between p-8"
                        : "fixed top-0 left-[-100%] h-screen ease-out duration-1000"
                }
            >
                <div className="flex flex-col space-y-16">
                    {/*//! Brand */}
                    <Link href="/">
                        <div className="cursor-pointer w-[30%]">
                            <Image src={logo} alt="Logo" className="object-contain" />
                        </div>
                    </Link>

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
            </div>
        </nav>
    );
};
