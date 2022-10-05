import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";

export const Newsletter: React.FC = () => (
    <section className="py-20 md:py-28 relative bg-black">
        {/*//! Side Image */}
        <div className="hidden lg:block absolute top-0 right-0 w-[200px] h-[449px]">
            <Image
                src="/newsletter_image.png"
                alt="Image"
                layout="fill"
                className="object-contain"
            />
        </div>

        {/*//! Form Box */}
        <div className="container mx-auto px-5 md:px-12 lg:px-24 xl:px-36">
            <div className="bg-[url('/newsletter_BG.png')] bg-cover flex flex-col justify-between items-center space-y-8 py-20 w-full xl:flex-row xl:space-y-0 xl:space-x-12 xl:px-12 2xl:space-x-20">
                {/*//// Heading */}
                <h1 className="text-3xl text-center font-np font-bold leading-tight md:text-4xl lg:text-5xl xl:text-4xl 2xl:text-5xl xl:text-left">
                    Subscribe to our Newsletter
                </h1>

                {/*//// Form */}
                <form className="w-full flex flex-col space-y-4 justify-between px-7 sm:px-28 md:px-32 lg:px-44 xl:px-8 xl:flex-row xl:justify-end xl:items-center xl:space-y-0 xl:space-x-5">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="w-full py-4 px-6 text-black font-ps font-normal text-lg rounded-lg border-2 border-white border-solid outline-none focus:outline-primary focus:outline-offset-0 focus:outline-[3px] transition-all ease-in"
                    />

                    <Button text="Subscribe" href="#" />
                </form>
            </div>
        </div>
    </section>
);
