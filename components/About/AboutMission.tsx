import Image from "next/image";
import dart from "../../public/dart.png";

export const AboutMission: React.FC = () => (
    <div className="flex flex-col-reverse xl:flex-row bg-[#0C0D0E]">
        <div className="space-y-16 p-8 xl:p-28 xl:w-[55%]">
            <h1 className="text-[2.5rem] leading-none xl:text-6xl font-np font-bold text-center xl:text-left">
                <span className="underline underline-offset-[30px] decoration-2 decoration-primary">
                    O
                </span>
                ur Mission
            </h1>
            <p className="text-lg xl:text-2xl font-ps font-normal break-all">
                Our mission is to give professional and highly creative result oriented advertising
                services and other related advisory and consulting services that will businesses,
                individuals and non-proﬁt organizations in building their brands and reaching out to
                a large range of potential customers all over Qatar.
            </p>
        </div>
        <div className="px-5 xl:px-0">
            <Image src={dart} alt="Dart Image" className="object-cover z-20" />
        </div>
    </div>
);
