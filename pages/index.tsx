import type { NextPage } from "next";
import Image from "next/image";
import { Layout } from "../components";
import { HiArrowNarrowDown } from "react-icons/hi";
import play from "../public/play.png";
import random_image1 from "../public/random_image1.png";
import random_image2 from "../public/random_image2.png";
import aboutus_image from "../public/aboutus_image.png";

const Home: NextPage = () => (
    <Layout page="Home">
        {/*//! Hero */}
        <div className="h-full flex justify-start items-center relative">
            {/*//// Background Video */}
            <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
                <source src="/hero.mp4" type="video/mp4" />
            </video>

            {/*//// Masthead */}
            <div className="relative container mx-auto px-36">
                {/*//? Hollow texts */}
                <div className="flex flex-col items-start justify-center absolute -top-20 left-0 font-black text-9xl z-20 ml-7">
                    <h1
                        className="text-transparent opacity-20 tracking-widest mb-8"
                        style={{ WebkitTextStroke: "1px white" }}
                    >
                        Design
                    </h1>
                    <h1
                        className="text-transparent opacity-20 tracking-widest mb-8"
                        style={{ WebkitTextStroke: "1px white" }}
                    >
                        Creative
                    </h1>
                    <h1
                        className="text-transparent opacity-20 tracking-widest"
                        style={{ WebkitTextStroke: "1px white" }}
                    >
                        Brand
                    </h1>
                </div>

                {/*//? CTA */}
                <div className="space-y-8">
                    <h1 className="text-8xl font-black">
                        We {""}
                        <span className="text-primary">
                            Believe In
                            <br />
                        </span>
                        Impressing {""}
                        <span className="text-primary ">
                            That
                            <br />
                        </span>
                        Lasts
                    </h1>

                    <h2 className="text-2xl w-[65%]">
                        Innovation, quality, customer service and reliability are the foundations of
                        our business
                    </h2>

                    <div>
                        <a href="#">
                            <Image src={play} alt="Play Video" />
                        </a>
                    </div>
                </div>
            </div>

            {/*//// Arrow  */}
            <a
                href="#about"
                className="z-20 absolute bottom-0 left-[50%] text-4xl mb-12 bg-primary bg-opacity-10 p-3 rounded-full animate-bounce"
            >
                <HiArrowNarrowDown color="#70dd36" />
            </a>
        </div>

        {/*//!  About Us  */}
        <div className="py-28 bg-black relative">
            <div className="absolute bottom-0 right-0">
                <Image src={aboutus_image} alt="Random Shape" />
            </div>

            <div className="container mx-auto px-36 flex items-center space-x-28">
                <div className="w-[50%] flex items-end justify-between relative">
                    <div className="absolute bottom-[35%] -left-[45%] -rotate-90 font-black text-9xl z-20">
                        <h1
                            className="text-transparent opacity-50 tracking-wider"
                            style={{ WebkitTextStroke: "1px white" }}
                        >
                            DESIGN
                        </h1>
                    </div>

                    <Image src={random_image1} alt="Random Image" className="object-contain" />
                    <Image src={random_image2} alt="Random Image" className="object-contain" />
                </div>

                <div className="w-[50%] flex flex-col items-start space-y-12">
                    <h1 className="text-6xl font-bold">
                        <span className="underline underline-offset-[30px] decoration-2 decoration-primary">
                            A
                        </span>
                        bout Us
                    </h1>

                    <p className="text-lg break-all">
                        INADS Established in 2019 as a Media & Advertising Company in Qatar. A
                        complete solutions provider for their advertisers with multiple
                        efficiencies.including strategic planning, buying clout, social media
                        muscle, content development, mobile media versatility and more planning
                        process to gain a deep understanding of the client&apos;s brand and message,
                        what they want to achieve and how to achieve the optimum results in the
                        right set of media channels.{" "}
                    </p>

                    <div className="bg-secondary px-9 py-4 font-semibold text-lg">
                        <a href="#">See More</a>
                    </div>
                </div>
            </div>
        </div>

        {/*//!  Features  */}

        {/*//! Contact Us */}
    </Layout>
);

export default Home;
