import Image from "next/image";
import map from "../../public/map.png";

export const ContactForm: React.FC = () => (
    <div className="bg-[url('/contact_bg.png')] bg-black bg-cover relative py-20 xl:py-28">
        <div className="container mx-auto px-6 xl:px-14 flex flex-col space-y-24">
            {/*//! Heading */}
            <h1 className="text-[2.5rem] leading-none xl:text-6xl font-np font-bold text-center">
                Contac
                <span className="underline underline-offset-[30px] decoration-2 decoration-primary">
                    t
                </span>
                {""} With Us
            </h1>

            {/*//! Form */}
            <div className="flex flex-col xl:flex-row items-center space-y-20 xl:space-y-0 xl:space-x-28">
                <div className="w-full xl:w-[50%]">
                    <form className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-5 gap-5">
                        <input
                            type="text"
                            name="full-name"
                            placeholder="Full Name"
                            className="px-4 py-4 bg-[#1F1F1F] font-ps font-normal text-white text-base md:text-lg border-none outline-none focus:outline-primary focus:outline-offset-0 focus:outline-1 transition-all ease-in"
                        />

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="p-4 bg-[#1F1F1F] font-ps font-normal text-white text-base md:text-lg border-none outline-none focus:outline-primary focus:outline-offset-0 focus:outline-1 transition-all ease-in"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="p-4 bg-[#1F1F1F] font-ps font-normal text-white text-base md:text-lg border-none outline-none focus:outline-primary focus:outline-offset-0 focus:outline-1 transition-all ease-in"
                        />

                        <input
                            type="tel"
                            name="phone"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            placeholder="Phone"
                            className="p-4 bg-[#1F1F1F] font-ps font-normal text-white text-base md:text-lg border-none outline-none focus:outline-primary focus:outline-offset-0 focus:outline-1 transition-all ease-in"
                        />

                        <textarea
                            name="comments"
                            rows={5}
                            placeholder="Write a comment"
                            className="col-span-2 row-span-3 resize-none font-ps font-normal p-4 bg-[#1F1F1F] text-white text-base md:text-lg  border-none outline-none focus:outline-primary focus:outline-offset-0 focus:outline-1 transition-all ease-in"
                        />

                        <button
                            type="submit"
                            className="bg-primary hover:bg-secondary col-span-2 px-9 py-4 font-inter font-bold text-lg text-center tracking-wider transition-all ease-in"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                <div className="xl:w-[50%] relative">
                    <div className="hidden xl:block absolute bg-secondary w-72 h-[530px] -top-5 right-1 z-10"></div>
                    <Image src={map} alt="Contact Image" className="object-contain z-20" />
                </div>
            </div>
        </div>
    </div>
);
