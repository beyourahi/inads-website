import location from "../../public/location.png";
import email from "../../public/email.png";
import whatsappContact from "../../public/whatsapp_contact.png";
import Image from "next/image";

export const contact_boxes = [
    { type: "Location", info: "Hleatan tower, Floor 11, Office 1104", icon: location },
    { type: "Mail", info: "info@inadsgroup.com", icon: email },
    { type: "WhatsApp", info: "0097450050602", icon: whatsappContact },
];

export const ContactInfo: React.FC = () => (
    <div className="bg-black py-20 xl:py-28">
        <div className="container mx-auto px-8 xl:px-36 flex flex-col space-y-20">
            {/*//! Heading  */}
            <h1 className="text-5xl xl:text-6xl font-np font-bold">
                <span className="underline underline-offset-[30px] decoration-2 decoration-primary">
                    C
                </span>
                ontact Info
            </h1>

            {/*//! Contact Boxes */}
            <div className="flex flex-col xl:flex-row space-y-8 xl:space-y-0 xl:space-x-5">
                {contact_boxes.map((item, index) => (
                    <div key={index} className="bg-[#18191B] p-7 flex items-center space-x-6 xl:w-1/3">
                        <Image src={item.icon} alt="contact images" />
                        <div className="flex flex-col space-y-2">
                            <h1 className="text-xl xl:text-2xl font-np font-semibold">{item.type}</h1>
                            <h2 className="text-base font-ps font-normal">{item.info}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
