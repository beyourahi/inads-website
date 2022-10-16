import Image from "next/image";
import random_image1 from "../../public/random_image1.png";
import random_image2 from "../../public/random_image2.png";
import aboutus_image from "../../public/aboutus_image.png";
import Link from "next/link";
import { Button } from "../Button";
import { motion, Variants } from "framer-motion";

const container: Variants = {
    offscreen: {
        y: 400,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1.5,
            staggerChildren: 0.6,
        },
    },
};

const item: Variants = {
    offscreen: { opacity: 0 },
    onscreen: { opacity: 1 },
};

export const HomeAbout: React.FC = () => (
    <div
        id="about"
        className="pb-20 md:py-28 bg-[url('/home_about_bg.png')] bg-black bg-cover relative"
    >
        {/*//! Side Shape */}
        <div className="absolute bottom-0 right-0">
            <Image src={aboutus_image} alt="Random Shape" />
        </div>

        <motion.div
            className="container mx-auto px-5 md:px-12 lg:px-24 xl:px-36 flex flex-col lg:flex-row items-center lg:space-x-12 xl:space-x-28 space-y-24 lg:space-y-0"
            variants={container}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
        >
            <motion.div
                className="hidden md:flex w-full lg:w-[50%] items-end justify-evenly relative"
                variants={item}
            >
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
            </motion.div>

            <motion.div
                className="w-full lg:w-[50%] flex flex-col items-center space-y-12 lg:items-start"
                variants={item}
            >
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
            </motion.div>
        </motion.div>
    </div>
);
