import Image from "next/image";

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
        <div className="container mx-auto lg:px-16 2xl:px-36">
            <div className="bg-[url('/newsletter_BG.png')] bg-cover flex flex-col 2xl:flex-row justify-between items-center space-y-8 py-20 2xl:px-16 w-full">
                {/*//// Heading */}
                <div>
                    <h1 className="text-4xl lg:text-[2.5rem] xl:text-5xl text-center 2xl:text-left font-np font-bold leading-tight">
                        Subscribe to our Newsletter
                    </h1>
                </div>

                {/*//// Form */}
                <form className="2xl:space-x-4 2xl:w-[55%] w-full flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 justify-between px-7 sm:px-28 md:px-32 lg:px-44 xl:px-80 2xl:px-0">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="w-full py-4 px-6 text-black font-ps font-normal text-lg rounded-lg border-2 border-white border-solid outline-none focus:outline-primary focus:outline-offset-0 focus:outline-[3px] transition-all ease-in"
                    />

                    <button
                        type="submit"
                        className="bg-primary hover:bg-secondary font-ps font-bold transition-all ease-in px-12 py-4 rounded-lg text-xl"
                    >
                        <span>Subscribe</span>
                    </button>
                </form>
            </div>
        </div>
    </section>
);
