import Image from "next/image";
import { image_gallery } from "data";
import features_image from "../../public/features_image.png";
import Link from "next/link";

export const HomeFeatures: React.FC = () => (
    <div className="bg-black py-20 md:py-28 relative">
        {/*//! Side Shape */}
        <div className="hidden sm:block absolute top-0 left-0">
            <Image src={features_image} alt="Random Shape" />
        </div>

        {/*//! Hollow Text */}
        <div className="hidden 2xl:flex items-center justify-center w-1/2 absolute left-[80rem] bottom-[40%] -rotate-90 font-np font-black text-[9rem]">
            <h1
                className="text-black opacity-20 tracking-widest"
                style={{ WebkitTextStroke: "1px white" }}
            >
                FEATURES
            </h1>
        </div>

        <div className="container mx-auto px-5 md:px-12 lg:px-24 xl:px-36 flex flex-col space-y-20">
            {/*//! Heading  */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-np font-bold text-center xl:text-left">
                <span className="underline underline-offset-[30px] decoration-2 decoration-primary">
                    O
                </span>
                ur Features
            </h1>

            <div className="flex flex-col items-center space-y-16">
                {/*//! Image Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 xl:grid-rows-2 gap-4">
                    {image_gallery.map((image, index) => (
                        <div key={index} className="group relative flex justify-center">
                            <Image src={image.src} alt="Feature Image" objectFit="cover" />
                            <div className="group-hover:opacity-100 absolute opacity-0 bottom-0 h-[65%] w-[85%] flex justify-center items-center bg-secondary bg-opacity-75 transition-all ease-in-out duration-[400ms]">
                                <h1 className="text-3xl font-bold font-np text-center">
                                    {image.text}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>

                {/*//! Button */}
                <Link href="/services">
                    <span className="bg-primary hover:bg-secondary font-inter font-bold cursor-pointer px-7 py-3.5 md:px-10 md:py-4 text-base md:text-lg transition-all ease-in rounded-lg">
                        See More
                    </span>
                </Link>
            </div>
        </div>
    </div>
);
