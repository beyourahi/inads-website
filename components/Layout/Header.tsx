import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { nav_links } from "data";
import logo from "../../public/logo.png";

export const Header: React.FC = () => (
    <header className="flex justify-between items-center px-32 py-12 backdrop-blur-lg bg-transparent fixed top-0 right-0 left-0 z-50">
        {/*//! Brand */}
        <div>
            <Image src={logo} alt="Logo" className="object-contain" />
        </div>

        {/*//! Nav Links */}
        <div className="space-x-10">
            {nav_links.map(link => (
                <span
                    key={link.name}
                    className="hover:text-primary font-medium transition-all ease-in text-lg"
                >
                    <Link href={link.url}>{link.name}</Link>
                </span>
            ))}
        </div>

        {/*//! Social Icons */}
        <div className="flex space-x-6 text-xl">
            <span className="hover:text-primary hover:scale-110 transition-all ease-in">
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                    <FaFacebookF />
                </a>
            </span>

            <span className="hover:text-primary hover:scale-110 transition-all ease-in">
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                    <FaLinkedinIn />
                </a>
            </span>

            <span className="hover:text-primary hover:scale-110 transition-all ease-in">
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                    <FaTwitter />
                </a>
            </span>

            <span className="hover:text-primary hover:scale-110 transition-all ease-in">
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <FaInstagram />
                </a>
            </span>
        </div>
    </header>
);
