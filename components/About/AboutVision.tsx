import Image from "next/image";
import specs from "../../public/specs.png";

export const AboutVision: React.FC = () => (
    <div className="flex flex-col xl:flex-row bg-[#0C0D0E] py-20 xl:py-0 xl:pr-36 justify-center items-center">
        <div className="px-5 md:px-12 lg:px-24 xl:px-0 xl:w-[50%]">
            <Image src={specs} alt="Specs Image" className="object-cover z-20" />
        </div>
        <div className="space-y-16 px-5 md:px-12 lg:px-24 xl:w-[50%]">
            <h1 className="text-4xl font-np font-bold text-center pt-20 md:text-5xl lg:text-6xl xl:text-left xl:pt-0">
                <span className="underline underline-offset-[30px] decoration-2 decoration-primary">
                    O
                </span>
                ur Vision
            </h1>
            <p className="text-base md:text-xl font-ps font-normal text-center xl:text-left">
                Our Vision is to build an overwhelming advertising agency that will dominate the
                advertising market in Qatar.
            </p>
        </div>
    </div>
);
