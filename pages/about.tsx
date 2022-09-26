import type { NextPage } from "next";
import Image from "next/image";
import { Layout } from "../components";

const About: NextPage = () => (
    <Layout page="About">
        <div>
            {/*//! Hero */}
            <div className="bg-[url('/writing.png')] bg-cover pb-36 pt-56">
                <div className="container mx-auto px-36 flex justify-between items-center">
                    <div className="space-y-3">
                        <h1 className="text-primary text-8xl font-black">GLOBALLY</h1>
                        <h2 className="text-5xl">CONNECTED LARGE</h2>
                        <h2 className="text-5xl">
                            <span className="underline underline-offset-[50px] decoration-primary">
                                NET
                            </span>
                            WORK
                        </h2>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h3 className="text-4xl">About Us</h3>
                        <span className="text-xl">Home - About us</span>
                    </div>
                </div>
            </div>

            {/*//! About Us  */}
            <div className="relative">
                <div className="flex items-center justify-center w-1/2 absolute left-[80rem] bottom-[40%] -rotate-90 font-black text-[9rem]">
                    <h1
                        className="text-black opacity-50 tracking-widest"
                        style={{ WebkitTextStroke: "1px white" }}
                    >
                        ABOUT US
                    </h1>
                </div>

                <div className="container mx-auto px-16 py-28 space-y-24">
                    {/*//// Top */}
                    <div className="flex bg-black space-x-32">
                        <div className="w-[45%] bg-[url('/meeting.png')] bg-cover"></div>
                        <div className="space-y-16 w-[55%]">
                            <h1 className="text-6xl font-bold">
                                <span className="underline underline-offset-[30px] decoration-2 decoration-primary">
                                    W
                                </span>
                                HO&apos;S INADS
                            </h1>
                            <p className="text-2xl break-all">
                                INADS group Established in 2019 as a Media & Advertising Company in
                                Qatar. A complete solutions provider for their advertisers with
                                multiple eﬃciencies, including strategic planning, buying clout,
                                social media muscle, content development, mobile media versatility
                                and more planning process to gain a deep understanding of the
                                client&apos;s brand and message, what they want to achieve and how
                                to achieve the optimum results in the right set of media channels.
                            </p>
                        </div>
                    </div>

                    {/*//// Bottom */}
                    <div className="flex bg-black space-x-32">
                        <div className="space-y-16 w-[55%]">
                            <p className="text-2xl break-all">
                                We use experts in research to understand how a client&apos;s target
                                consumers think, feel and act about certain things in certain
                                situations then will use these consumer insights to develop a
                                strategic media communications plan which connects with the
                                client&apos;s target audience.
                                <br />
                                <br />
                                We craft the message that needs to be heard, and determine how and
                                where it should be heard, from traditional advertising to
                                out-of-home media to online display and search ads.
                                <br />
                                <br />
                                We pride ourselves on our outstanding client service and we
                                won&apos;t settle for anything less than perfect for our clients and
                                consider all their media options, then design a marketing plan that
                                meets their goals.
                            </p>
                        </div>
                        <div className="w-[45%] bg-[url('/art.png')] bg-cover"></div>
                    </div>
                </div>
            </div>

            {/*//! Vision */}
            <div className="flex bg-black">
                <div className="w-[45%] bg-[url('/specs.png')] bg-cover"></div>
                <div className="space-y-16 p-28 w-[55%]">
                    <h1 className="text-6xl font-bold">
                        <span className="underline underline-offset-[30px] decoration-2 decoration-primary">
                            O
                        </span>
                        ur Vision
                    </h1>
                    <p className="text-2xl break-all">
                        Our Vision is to build an overwhelming advertising agency that will dominate
                        the advertising market in Qatar.
                    </p>
                </div>
            </div>

            {/*//! Mission */}
            <div className="flex bg-black">
                <div className="space-y-16 p-28 w-[55%]">
                    <h1 className="text-6xl font-bold">
                        <span className="underline underline-offset-[30px] decoration-2 decoration-primary">
                            O
                        </span>
                        ur Mission
                    </h1>
                    <p className="text-2xl break-all">
                        Our mission is to give professional and highly creative result oriented
                        advertising services and other related advisory and consulting services that
                        will businesses, individuals and non-proﬁt organizations in building their
                        brands and reaching out to a large range of potential customers all over
                        Qatar.
                    </p>
                </div>
                <div className="w-[45%] bg-[url('/dart.png')] bg-cover"></div>
            </div>
        </div>
    </Layout>
);

export default About;
