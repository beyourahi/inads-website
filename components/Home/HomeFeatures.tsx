import Image from "next/image";
import IG1 from "../../public/IG1.png";
import IG2 from "../../public/IG2.png";
import IG3 from "../../public/IG3.png";
import IG4 from "../../public/IG4.png";
import IG5 from "../../public/IG5.png";
import IG6 from "../../public/IG6.png";
import IG7 from "../../public/IG7.png";
import IG8 from "../../public/IG8.png";
import features_image from "../../public/features_image.png";

export const HomeFeatures: React.FC = () => (
    <div className="bg-black py-28 relative">
        <div className="absolute top-0 left-0">
            <Image src={features_image} alt="Random Shape" />
        </div>

        <div className="flex items-center justify-center w-1/2 absolute left-[80rem] bottom-[40%] -rotate-90 font-black text-[9rem]">
            <h1
                className="text-black opacity-30 tracking-widest"
                style={{ WebkitTextStroke: "1px white" }}
            >
                FEATURES
            </h1>
        </div>

        <div className="container mx-auto px-36 flex flex-col space-y-20">
            {/*//! Heading  */}
            <h1 className="text-6xl font-bold">
                <span className="underline underline-offset-[30px] decoration-2 decoration-primary">
                    O
                </span>
                ur Features
            </h1>

            <div className="flex flex-col items-center space-y-16">
                {/*//! Image Gallery */}
                <div className="grid grid-cols-4 grid-rows-2 gap-4">
                    <Image src={IG1} alt="IG1" objectFit="cover" />
                    <Image src={IG2} alt="IG2" objectFit="cover" />
                    <Image src={IG3} alt="IG3" objectFit="cover" />
                    <Image src={IG4} alt="IG4" objectFit="cover" />
                    <Image src={IG5} alt="IG5" objectFit="cover" />
                    <Image src={IG6} alt="IG6" objectFit="cover" />
                    <Image src={IG7} alt="IG7" objectFit="cover" />
                    <Image src={IG8} alt="IG8" objectFit="cover" />
                </div>

                {/*//! Button */}
                <a className="bg-primary hover:bg-secondary px-9 py-4 font-semibold text-lg cursor-pointer transition-all ease-in">
                    See More
                </a>
            </div>
        </div>
    </div>
);
