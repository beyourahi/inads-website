import Image from "next/image";
import specs from "../../public/specs.png";

export const AboutVision: React.FC = () => (
    <div className="flex flex-col xl:flex-row bg-[#0C0D0E]">
        <div className="px-5 xl:px-0">
            <Image src={specs} alt="Specs Image" className="object-cover z-20" />
        </div>
        <div className="space-y-16 p-8 xl:p-28 xl:w-[55%]">
            <h1 className="text-[2.5rem] leading-none xl:text-6xl font-np font-bold text-center xl:text-left">
                <span className="underline underline-offset-[30px] decoration-2 decoration-primary">
                    O
                </span>
                ur Vision
            </h1>
            <p className="text-lg xl:text-2xl font-ps font-normal break-all">
                Our Vision is to build an overwhelming advertising agency that will dominate the
                advertising market in Qatar.
            </p>
        </div>
    </div>
);
