import type { NextPage } from "next";
import Link from "next/link";

const Custom404: NextPage = () => (
    <div className="bg-black text-white h-screen">
        <div className="container mx-auto h-full px-8 xl:px-36 flex flex-col justify-center items-center space-y-16">
            <div className="text-center space-y-4">
                <h1
                    className="text-[10rem] lg:text-[13rem] xl:text-[15rem] leading-none font-mont font-black text-transparent"
                    style={{ WebkitTextStroke: "1px #70dd36" }}
                >
                    404
                </h1>
                <h1 className="text-xl lg:text-2xl font-mont font-semibold">
                    Oops! Looks like you&apos;re lost buddy
                </h1>
            </div>

            <Link href="/">
                <span className="bg-primary hover:bg-secondary font-inter font-bold cursor-pointer px-7 py-3.5 xl:px-10 xl:py-4 text-base xl:text-lg transition-all ease-in rounded-lg">
                    Go back home
                </span>
            </Link>
        </div>
    </div>
);

export default Custom404;
