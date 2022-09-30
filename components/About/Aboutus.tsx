import Image from "next/image";

export const AboutUs: React.FC = () => (
    <div className="relative bg-black">
        {/*//! Hollow Text */}
        <div className="flex items-center justify-center w-1/2 absolute left-[80rem] bottom-[40%] -rotate-90 font-black text-[9rem]">
            <h1
                className="text-black opacity-30 tracking-widest"
                style={{ WebkitTextStroke: "1px white" }}
            >
                ABOUT US
            </h1>
        </div>

        <div className="container mx-auto px-16 py-28 space-y-24">
            {/*//// Top */}
            <div className="flex items-center bg-black">
                <div className="w-[50%] relative z-20">
                    <Image
                        src="/meeting.png"
                        alt="Pointing Image"
                        width={633}
                        height={424}
                        className="object-contain z-20"
                    />
                    <div className="absolute bg-secondary w-72 h-72 -top-5 left-5 z-10"></div>
                </div>
                <div className="space-y-16 w-[50%]">
                    <h1 className="text-6xl font-bold">
                        <span className="underline underline-offset-[30px] decoration-2 decoration-primary">
                            W
                        </span>
                        HO&apos;S INADS
                    </h1>
                    <p className="text-2xl break-all">
                        INADS group Established in 2019 as a Media & Advertising Company in Qatar. A
                        complete solutions provider for their advertisers with multiple eﬃciencies,
                        including strategic planning, buying clout, social media muscle, content
                        development, mobile media versatility and more planning process to gain a
                        deep understanding of the client&apos;s brand and message, what they want to
                        achieve and how to achieve the optimum results in the right set of media
                        channels.
                    </p>
                </div>
            </div>

            {/*//// Bottom */}
            <div className="flex bg-black items-center space-x-12">
                <div className="space-y-16 w-[50%]">
                    <p className="text-2xl break-all">
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
                </div>
                <div className="w-[50%] relative z-20">
                    <Image
                        src="/art.png"
                        alt="Pointing Image"
                        width={679}
                        height={483}
                        className="object-contain z-20"
                    />
                    <div className="absolute bg-secondary w-72 h-[530px] -top-6 right-10 z-10"></div>
                </div>
            </div>
        </div>
    </div>
);
