import Image from "next/image";
import { contact_boxes } from "data";

export const ContactInfo: React.FC = () => (
    <div className="bg-black py-20 xl:py-28">
        <div className="container mx-auto px-5 md:px-12 lg:px-24 flex flex-col space-y-20">
            {/*//! Heading  */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-np font-bold text-center">
                <span className="underline underline-offset-[30px] decoration-2 decoration-primary">
                    C
                </span>
                ontact Info
            </h1>

            {/*//! Contact Boxes */}
            <div className="flex flex-col xl:flex-row space-y-8 xl:space-y-0 xl:space-x-5">
                {contact_boxes.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#18191B] p-7 flex items-center space-x-6 xl:w-1/3"
                    >
                        <Image src={item.icon} alt="contact images" />
                        <div className="flex flex-col space-y-2">
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-np font-semibold">
                                {item.type}
                            </h1>
                            <h2 className="text-base md:text-lg lg:text-xl font-ps font-normal">{item.info}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
