import Image from "next/image";
import random_image1 from "../../public/random_image1.png";
import random_image2 from "../../public/random_image2.png";
import aboutus_image from "../../public/aboutus_image.png";
import Link from "next/link";
import { Button } from "../Button";

export const HomeAbout: React.FC = () => (
    <div
        id="about"
        className="pb-20 md:py-28 bg-[url('/home_about_bg.png')] bg-black bg-cover relative"
    >
        {/*//! Side Shape */}
        <div className="absolute bottom-0 right-0">
            <Image src={aboutus_image} alt="Random Shape" />
        </div>

        <div className="container mx-auto px-5 md:px-12 lg:px-24 xl:px-36 flex flex-col lg:flex-row items-center lg:space-x-12 xl:space-x-28 space-y-24 lg:space-y-0">
            <div className="hidden md:flex w-full lg:w-[50%] items-end justify-evenly relative">
                {/*//// Hollow Text */}
                <div className="hidden md:block absolute bottom-[35%] xl:bottom-[35%] -left-[30%] lg:-left-[65%] 2xl:-left-[40%] -rotate-90 font-np font-black text-9xl z-20">
                    <h1
                        className="text-transparent opacity-30 tracking-wider"
                        style={{ WebkitTextStroke: "1px white" }}
                    >
                        DESIGN
                    </h1>
                </div>

                <Image src={random_image1} alt="Random Image" className="object-contain" />
                <Image src={random_image2} alt="Random Image" className="object-contain" />
            </div>

            <div className="w-full lg:w-[50%] flex flex-col items-center space-y-12 lg:items-start">
                <h1 className="text-4xl md:text-6xl font-np font-bold">
                    <span className="underline underline-offset-[30px] decoration-2 decoration-primary">
                        A
                    </span>
                    bout Us
                </h1>

                <p className="font-ps font-normal text-lg text-center lg:text-left">
                    INADS Established in 2019 as a Media & Advertising Company in Qatar. A complete
                    solutions provider for their advertisers with multiple efficiencies.including
                    strategic planning, buying clout, social media muscle, content development,
                    mobile media versatility and more planning process to gain a deep understanding
                    of the client&apos;s brand and message, what they want to achieve and how to
                    achieve the optimum results in the right set of media channels.{" "}
                </p>

                <Button text="See More" href="/about" />
            </div>
        </div>
    </div>
);
