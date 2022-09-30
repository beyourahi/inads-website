import Image from "next/image";
import contact_image1 from "../../public/contact_image1.png";
import contact_image2 from "../../public/contact_image2.png";
import contact_shape1 from "../../public/contact_shape1.png";
import contact_shape2 from "../../public/contact_shape2.png";

export const HomeContact: React.FC = () => (
    <div className="bg-black relative py-28">
        <div className="absolute bottom-0 left-0 flex flex-col">
            <Image src={contact_shape1} alt="Random Shape" />
            <Image src={contact_shape2} alt="Random Shape" />
        </div>

        <div className="container mx-auto px-14 flex flex-col space-y-24">
            {/*//! Heading */}
            <h1 className="text-6xl font-bold text-center">
                Contac
                <span className="underline underline-offset-[30px] decoration-2 decoration-primary">
                    t
                </span>
                {""} With Us
            </h1>

            {/*//! Form */}
            <div className="flex items-center space-x-28">
                <div className="w-[50%]">
                    <form className="grid grid-cols-2 grid-rows-5 gap-5">
                        <input
                            type="text"
                            name="full-name"
                            placeholder="Full Name"
                            className="px-6 py-5 bg-[#1F1F1F] text-white text-lg placeholder:text-white border-none outline-none focus:outline-primary focus:outline-offset-0 focus:outline-1 transition-all ease-in"
                        />

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="px-6 py-5 bg-[#1F1F1F] text-white text-lg placeholder:text-white border-none outline-none focus:outline-primary focus:outline-offset-0 focus:outline-1 transition-all ease-in"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="px-6 py-5 bg-[#1F1F1F] text-white text-lg placeholder:text-white border-none outline-none focus:outline-primary focus:outline-offset-0 focus:outline-1 transition-all ease-in"
                        />

                        <input
                            type="tel"
                            name="phone"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            placeholder="Phone"
                            className="px-6 py-5 bg-[#1F1F1F] text-white text-lg placeholder:text-white border-none outline-none focus:outline-primary focus:outline-offset-0 focus:outline-1 transition-all ease-in"
                        />

                        <textarea
                            name="comments"
                            placeholder="Write a comment"
                            className="col-span-2 row-span-3 resize-none px-6 py-5 bg-[#1F1F1F] text-white text-lg placeholder:text-white border-none outline-none focus:outline-primary focus:outline-offset-0 focus:outline-1 transition-all ease-in"
                        />

                        <button
                            type="submit"
                            className="bg-primary hover:bg-secondary col-span-2 px-9 py-4 font-semibold text-xl text-center tracking-wider transition-all ease-in"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                <div className="flex items-end justify-evenly w-[50%]">
                    <Image src={contact_image1} alt="Contact Image" className="object-contain" />
                    <Image src={contact_image2} alt="Contact Image" className="object-contain" />
                </div>
            </div>
        </div>
    </div>
);
