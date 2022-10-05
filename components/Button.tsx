import Link from "next/link";

interface ButtonProps {
    text: string;
    href: string;
}

export const Button: React.FC<ButtonProps> = ({ text, href }) => (
    <Link href={href}>
        <span className="bg-primary hover:bg-secondary font-inter font-bold cursor-pointer px-7 py-3.5 md:px-10 md:py-4 text-base md:text-lg transition-all ease-in rounded-lg">
            {text}
        </span>
    </Link>
);
