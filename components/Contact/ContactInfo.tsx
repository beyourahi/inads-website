import { BsWhatsapp } from "react-icons/bs";
import { IoMdMailUnread } from "react-icons/io";
import { ImLocation } from "react-icons/im";

export const contact_boxes = [
    { type: "Location", info: "Hleatan tower, Floor 11, Office 1104", icon: <ImLocation /> },
    { type: "Mail", info: "info@inadsgroup.com", icon: <IoMdMailUnread /> },
    { type: "WhatsApp", info: "0097450050602", icon: <BsWhatsapp /> },
];

export const ContactInfo: React.FC = () => (
    <div className="bg-black py-28">
        <div className="container mx-auto px-36 flex flex-col space-y-20">
            {/*//! Heading  */}
            <h1 className="text-6xl font-np font-bold">
                <span className="underline underline-offset-[30px] decoration-2 decoration-primary">
                    C
                </span>
                ontact Info
            </h1>

            {/*//! Contact Boxes */}
            <div className="flex space-x-5">
                {contact_boxes.map((item, index) => (
                    <div key={index} className="bg-[#18191B] p-7 flex items-center space-x-6 w-1/3">
                        <div className="bg-[#26282B] text-primary text-4xl p-4">{item.icon}</div>
                        <div className="flex flex-col space-y-2">
                            <h1 className="text-2xl font-np font-semibold">{item.type}</h1>
                            <h2 className="text-base font-ps font-normal">{item.info}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
