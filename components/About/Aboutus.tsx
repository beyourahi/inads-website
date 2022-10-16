import Image from "next/image";
import { motion, Variants } from "framer-motion";

const swoosh: Variants = {
    offscreenR: {
        x: 300,
        opacity: 0,
    },
    onscreenR: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1.5,
        },
    },
    offscreenL: {
        x: -300,
        opacity: 0,
    },
    onscreenL: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1.5,
        },
    },
};

export const AboutUs: React.FC = () => (
    <div className="relative bg-black overflow-x-hidden">
        {/*//! Hollow Text */}
        <div className="hidden items-center justify-center w-1/2 absolute left-[80rem] bottom-[40%] -rotate-90">
            <h1
                className="text-black font-np font-black text-[9rem] opacity-20 tracking-widest"
                style={{ WebkitTextStroke: "1px white" }}
            >
                ABOUT US
            </h1>
        </div>

        <div className="container mx-auto px-5 md:px-12 lg:px-24 py-20 xl:py-28 space-y-12 xl:space-y-24">
            {/*//// Top */}
            <div className="flex flex-col xl:flex-row items-center space-y-12 xl:space-y-0 xl:space-x-20 bg-black">
                <motion.div
                    className="xl:w-[50%] relative z-20"
                    variants={swoosh}
                    initial="offscreenL"
                    whileInView="onscreenL"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <Image
                        src="/meeting.png"
                        alt="Meeting Image"
                        width={633}
                        height={424}
                        className="object-cover z-20"
                    />
                    <div className="hidden xl:block absolute bg-secondary w-72 h-72 -top-5 -left-6 z-10"></div>
                </motion.div>

                <motion.div
                    className="space-y-16 xl:w-[50%]"
                    variants={swoosh}
                    initial="offscreenR"
                    whileInView="onscreenR"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-np font-bold text-center xl:text-left">
                        <span className="underline underline-offset-[30px] decoration-2 decoration-primary">
                            W
                        </span>
                        HO&apos;S INADS
                    </h1>
                    <p className="text-base md:text-xl font-ps font-normal text-center xl:text-left">
                        INADS established in 2019 as a Media & Advertising company in Qatar. A
                        complete solutions provider for their advertisers with multiple eﬃciencies,
                        including strategic planning, buying clout, social media muscle, content
                        development, mobile media versatility and more planning process to gain a
                        deep understanding of the client&apos;s brand and message, what they want to
                        achieve and how to achieve the optimum results in the right set of media
                        channels.
                    </p>
                </motion.div>
            </div>

            {/*//// Bottom */}
            <div className="flex flex-col-reverse xl:flex-row bg-black items-center xl:space-x-20">
                <motion.div
                    className="space-y-16 xl:w-[50%]"
                    variants={swoosh}
                    initial="offscreenL"
                    whileInView="onscreenL"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <p className="text-base md:text-xl font-ps font-normal text-center xl:text-left">
                        We use experts in research to understand how a client&apos;s target
                        consumers think, feel and act about certain things in certain situations
                        then will use these consumer insights to develop a strategic media
                        communications plan which connects with the client&apos;s target audience.
                        <br />
                        <br />
                        We craft the message that needs to be heard, and determine how and where it
                        should be heard, from traditional advertising to out-of-home media to online
                        display and search ads.
                        <br />
                        <br />
                        We pride ourselves on our outstanding client service and we won&apos;t
                        settle for anything less than perfect for our clients and consider all their
                        media options, then design a marketing plan that meets their goals.
                    </p>
                </motion.div>

                <motion.div
                    className="xl:w-[50%] relative z-20 mb-12 xl:mb-0"
                    variants={swoosh}
                    initial="offscreenR"
                    whileInView="onscreenR"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <Image
                        src="/art.png"
                        alt="Pointing Image"
                        width={679}
                        height={483}
                        className="object-cover z-20"
                    />
                    <div className="hidden xl:block absolute bg-secondary w-72 h-[26rem] -top-7 -right-7 z-10"></div>
                </motion.div>
            </div>
        </div>
    </div>
);
