import Image from "next/image";
import random_image1 from "../../public/random_image1.png";
import random_image2 from "../../public/random_image2.png";
import aboutus_image from "../../public/aboutus_image.png";
import Link from "next/link";

export const HomeAbout: React.FC = () => (
    <div id="about" className="py-28 bg-[url('/home_about_bg.png')] bg-black bg-cover relative">
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
                    INADS Established in 2019 as a Media & Advertising Company in Qatar. A complete
                    solutions provider for their advertisers with multiple efficiencies.including
                    strategic planning, buying clout, social media muscle, content development,
                    mobile media versatility and more planning process to gain a deep understanding
                    of the client&apos;s brand and message, what they want to achieve and how to
                    achieve the optimum results in the right set of media channels.{" "}
                </p>

                <Link href="/about">
                    <span className="bg-primary hover:bg-secondary px-9 py-4 font-semibold text-lg cursor-pointer transition-all ease-in">
                        See More
                    </span>
                </Link>
            </div>
        </div>
    </div>
);
